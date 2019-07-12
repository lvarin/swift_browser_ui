"""CLI for configuring and launching the server."""


import logging
import sys


import click


from .__init__ import __version__
from .settings import setd, set_key, FORMAT
from .server import servinit, run_server_insecure
from ._convenience import setup_logging as conv_setup_logging


@click.group()
@click.version_option(
    version=__version__, prog_name="s3browser"
)
@click.option(
    '-v', '--verbose', is_flag=True, default=False,
    help='Increase program verbosity.'
)
@click.option(
    '-D', '--debug', is_flag=True, default=False,
    help='Enable debug level logging.'
)
@click.option(
    '--logfile', default=None, type=str,
    help='Write program logs to a file.'
)
def cli(verbose, debug, logfile):
    """Command line interface for managing s3browser."""
    # set version
    setd['version'] = __version__
    # set verbose
    if verbose:
        setd['verbose'] = True
        logging.root.setLevel(logging.INFO)
        logging.info(
            'Set logging level to info. %s',
            'Reason: got flag "--verbose"'
        )
    # set debug
    if debug:
        setd['debug'] = True
        logging.root.setLevel(logging.DEBUG)
        logging.info(
            'Set logging level to debug. %s',
            'Reason: got flag "--debug"'
        )
    # set logfile
    if logfile:
        setd['logfile'] = logfile
        new_handler = logging.FileHandler(logfile)
        new_handler.setFormatter(
            logging.Formatter(FORMAT)
        )
        logging.root.addHandler(
            new_handler
        )
        logging.info(
            'Save log information to the file %s %s',
            logfile,
            ' – Reason: got option "--logfile"'
        )
    conv_setup_logging()


@cli.command()
@click.option(
    '-p', '--port', default=8080,
    help='Set the port the server is run on.'
)
@click.option(
    '--auth-endpoint-url', default=None, type=str,
    help="Endpoint for the Openstack keystone API in use."
)
@click.option(
    '--has-trust', is_flag=True, default=False,
    help=('Flag if the program is listed on the trusted_dashboards in the' +
          ' specified address.')
)
@click.option(
    '--dry-run', is_flag=True, default=False, hidden=True,
)
@click.option(
    '--set-origin-address', default=None, type=str,
    help="Set the address that the program will be redirected to from WebSSO"
)
@click.option(
    '--set-session-devmode', is_flag=True, default=False, hidden=True,
)
def start(
        port,
        static_directory,
        auth_endpoint_url,
        has_trust,
        dry_run,
        set_origin_address,
        set_session_devmode,
):
    """Start the browser backend and server."""
    logging.debug(
        "Current settings dictionary:%s", str(setd)
    )
    set_key("port", port, "Set running port as %s")
    set_key(
        "static_directory",
        static_directory,
        "Set static dir location as %s"
    )
    set_key(
        "auth_endpoint_url",
        auth_endpoint_url,
        "Set auth endpoint url to %s"
    )
    set_key(
        "has_trust",
        has_trust,
        "Assuming the program is trusted for SSO on the endpoint. %s"
    )
    set_key("dry_run", dry_run, "Not running server, dry-run flagged. %s")
    set_key(
        "set_origin_address",
        set_origin_address,
        "Setting login return address to %s"
    )
    set_key(
        "set_session_devmode",
        set_session_devmode,
        "Disabled logouts for development purposes. %s"
    )
    logging.debug(
        "Running settings directory:%s", str(setd)
    )
    if not dry_run:
        run_server_insecure(servinit())


def main():
    """Run the CLI."""
    cli(  # pylint: disable=no-value-for-parameter,unexpected-keyword-arg
        auto_envvar_prefix='BROWSER'
    )


if __name__ == "__main__":
    if sys.version_info < (3, 6):
        logging.error("s3-object-browser requires >= python3.6")
        sys.exit(1)
    main()
