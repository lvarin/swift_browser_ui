import setuptools
from swift_browser_ui import __name__, __version__, __author__


setuptools.setup(
    name=__name__,
    version=__version__,
    description="Object browser Web UI for Openstack Swift API",
    author=__author__,
    project_urls={
        "Source": "https://github.com/CSCfi/swift-browser-ui",
    },
    license="MIT",
    install_requires=[
        "aiohttp==3.8.1",
        "aiohttp_session==2.11.0",
        "python-swiftclient==3.13.0",
        "cryptography==36.0.1",
        "keystoneauth1==4.4.0",
        "click==8.0.3",
        "gunicorn>=20.0.1",
        "uvloop==0.16.0",
        "certifi==2021.10.8",
        "asyncpg==0.25.0",
        "aioredis==2.0.1",
    ],
    extras_require={
        "test": [
            "tox==3.24.5",
            "pytest==7.0.1",
            "pytest-cov==3.0.0",
            "coverage==6.3.1",
            "flake8==4.0.1",
            "flake8-docstrings==1.6.0",
            "pytest-xdist==2.5.0",
            "black== 22.1.0",
        ],
        "docs": ["sphinx==4.4.0", "sphinx_rtd_theme==1.0.0"],
        "ui_test": ["pytest==7.0.1", "pytest-timeout==2.1.0"],
    },
    packages=setuptools.find_packages(),
    package_data={
        __name__: [
            "ui/static/*",
            "ui/static/js/*",
            "ui/static/css/*",
            "ui/static/img/*",
        ]
    },
    include_package_data=True,
    platforms="any",
    entry_points={
        "console_scripts": [
            "swift-browser-ui=swift_browser_ui.launcher:run_ui",
            "swift-x-account-sharing=swift_browser_ui.launcher:run_sharing",
            "swift-sharing-request=swift_browser_ui.launcher:run_request",
            "swift-upload-runner=swift_browser_ui.launcher:run_upload",
        ]
    },
    classifiers=[
        "Development Status :: 4 - Beta",
        # Indicate who your project is intended for
        "Intended Audience :: Developers",
        "Intended Audience :: Information Technology",
        "Topic :: Internet :: WWW/HTTP :: HTTP Servers",
        # Pick your license as you wish
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
    ],
)
