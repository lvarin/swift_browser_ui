
let bucket_overrides = {
  en: {
    message: {
      index: {
        formName: "CSC Account",
        loginmethods: [
          {
            msg: "Log In using Haka",
            href: "/login",
          },
          {
            msg: "Log in with CSC Account",
            href: "/loginpassword",
          },
        ],
      },
      error: {
        inUse: "Container name is already in use.",
        inUseOtherPrj: "Container name is already in use by another project.",
        invalidName: "Container name or tag is invalid.",
        createFail: "Container creation failed.",
        forbiddenChars: "Container name cannot contain special " +
        "characters other than dot(.), hyphen(-), and underscore(_)",
        segments: "Container name cannot end with '_segments'",
      },
      dropFiles: "Drag and drop containers here or ",
      createFolder: "Create container",
      program_name: "Allas Web UI",
      program_description: "Allas Web UI provides a simple-to-use web user " +
          "interface for CSC Object Storage service, Allas.",
      helplink: "https://docs.csc.fi/data/Allas/",
      folderTabs: {
        all: "All containers",
        sharedFrom: "Containers you have shared",
        sharedTo: "Containers shared with you",
      },
      folderDetails: {
        notShared: "This container isn't shared with other projects.",
        sharing_to_one_project: "This container is shared to one project.",
        sharing_to_many_projects: "This container is shared to multiple" +
            "projects.",
        shared_with_view:
          "You can browse this container. (@:message.share.view_perm)",
        shared_with_read:
          "You can copy this container and download files in decrypted" +
          "format." +
          " (@:message.share.read_perm)",
        shared_with_read_write:
          "You can copy this container and download files in decrypted" +
            "format." +
          " You can upload new files or delete existing files from this " +
          "container. (@:message.share.write_perm)",
      },
      table: {
        source_project_id: "Share ID of this container",
        back_to_all_folders: "Back to all containers",
        back_to_sharing_folders: "Back to containers you have shared",
        back_to_shared_folders: "Back to containers shared with you",
      },
      tableOptions: {
        render: "Display as containers",
      },
      share: {
        share_id_tooltip:
          "With this action, you can copy the Share ID: " +
          "a unique 32-digit code associated with your {tooltipb} " +
          "project. Provide the Share ID to members " +
          "of other projects (e.g., via email) so that they can " +
          "share containers with you.",
        instructions: "How to share a container",
        share_title: "Share container",
        share_guide_intro:
          "To share a container with another project you need to:",
        share_guide_step1:
          "You need to know in advance " +
          "the Share ID (a 32-digit code) associated " +
          "with the project you want to share a container with. The " +
          "recipient can copy the Share ID from the user " +
          "interface and provide it to you via email. You can share " +
          "a container with multiple projects.",
        view_perm_desc:
          ": The recipient project's members can only " +
          "view the container content. Use this when you " +
          "need maximum certainty that your files are not distributed " +
          "further. Note that you have to be also the project manager of " +
          "the recipient project.",
        read_perm_desc:
          ": The recipient project's members can copy your container " +
          "and download files in decrypted format. Use this when you want to " +
          "transfer your data to another project.",
        write_perm_desc:
          ": In addition to @:message.share.read_perm permission, " +
          "the recipient project's members can upload new files or delete " +
          "existing files from your container. Use this when " +
          "you want the container to be your shared workspace.",
        shared_successfully: "container was shared successfully!",
        shared_table_title: "This container is shared with",
        fail_duplicate: "The project already has access to the container.",
      },
      emptyContainer: "This container has no content.",
      emptyProject: {
        all: "There are no containers in this project.",
        sharedFrom: "You haven't shared any containers.",
        sharedTo: "No containers have been shared with you.",
      },
      containers: "Containers - ",
      download: {
        files: "Files can only be downloaded " +
          "individually because there are file or subcontainer names longer " +
          "than 99 characters.",
        warnTempFiles: "Opening temporary files or containers " +
          "(.crdownload, .crswap) may interrupt the process.",
      },
      upload: {
        viewDestinationFolder: "View destination container",
        accessFail: "Container could not be accessed.",
      },
      copyfail: "Failed to copy the container",
      container_ops: {
        addContainer: "Create new container",
        norename:
          "Please note that container names cannot be modified " +
          "after creating a container.",
        createdFolder:
          "Created container will be shared with all project members in ",
        deleteNote: "Container must be empty before " + "it can be deleted.",
        deleteSuccess: "Container was deleted.",
        folderName: "Container name",
      },
      subfolders: {
        deleteOneSuccess: "Subcontainer was deleted.",
        deleteManySuccess: "Subcontainers were deleted.",
      },
      objects: {
        deleteSharedObjects:
          "This action will permanently delete " +
          "items from a shared container. " +
          "Are you sure you want to proceed?",
      },
      replicate: {
        copy_folder: "Copy container: ",
        name_newFolder: "Name new container",
      },
      encrypt: {
        uploadDestination: "Destination container: ",
        upload_step1: "Create a new container",
        uploadedToShared:
          "and all members in other projects which " +
          "have access to this shared container.",
      },
      search: {
        container: "Container",
        folder: "Subcontainer",
      },
    },
    label: {
      folder_tabs: "different types of containers",
      searchbox: "search for containers",
    },
  },
  fi: {
    message: {
      formName: "CSC Käyttäjä",
      index: {
        loginmethods: [
          {
            msg: "Kirjaudu Haka:lla",
            href: "/login",
          },
          {
            msg: "Kirjaudu CSC käyttäjällä",
            href: "/loginpassword",
          },
        ],
      },
      program_name: "Allas Web UI",
      program_description: "Allas Web UI tarjoaa yksinkertaisen " +
          "web-käyttöliittymän CSC:n Object Storage -palveluun, Altaaseen.",
      helplink: "https://docs.csc.fi/data/Allas/",
    },
  },
};


export default bucket_overrides;
