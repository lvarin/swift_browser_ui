
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
          "You can copy this container and download objects." +
          " (@:message.share.read_perm)",
        shared_with_read_write:
          "You can copy this container and download objects."  +
          " You can upload new objects or delete existing objects from this " +
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
        text: "Display as object paths",
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
          "need maximum certainty that your objects are not distributed " +
          "further. Note that you have to be also the project manager of " +
          "the recipient project.",
        read_perm_desc:
          ": The recipient project's members can copy your container " +
          "and download objects. Use this when you want to " +
          "transfer your data to another project.",
        write_perm_desc:
          ": In addition to @:message.share.read_perm permission, " +
          "the recipient project's members can upload new objects or delete " +
          "existing objects from your container. Use this when " +
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
        files: "Objects can only be downloaded " +
          "individually because there are object or subcontainer names longer" +
          " than 99 characters.",
        gathering: "Gathering a list of objects",
        warnTempFiles: "Opening temporary objects or containers " +
          "(.crdownload, .crswap) may interrupt the process.",
      },
      upload: {
        duplicate: "Objects with the same paths are not allowed.",
        sizeZero: "Empty objects cannot be uploaded.",
        viewDestinationFolder: "View destination container",
        addFiles: "Please add objects to upload.",
        accessFail: "Container could not be accessed.",
      },
      copyfail: "Failed to copy the container",
      notDecryptable: "Some requested objects could not be decrypted.",
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
        file: "Object ",
        files: "Objects ",
        overwriteConfirm: " already exists. Do you want to replace " +
        "this object? (Previous object will be lost.)",
        overwriteConfirmMany:
          " already exist. Do you want to replace these objects? " +
          "(Previous objects will be lost.)",
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
        uploadFiles: "Upload objects",
        uploadDestination: "Destination container: ",
        upload_step1: "Create a new container",
        upload_step2: "Objects to be uploaded",
        dropMsg: "Select objects",
        uploadedToShared:
          "and all members in other projects which " +
          "have access to this shared container.",
        empty: "No objects selected",
        uploadedFiles:
          "Uploaded objects will be shared with all project members in ",
      },
      search: {
        container: "Container",
        folder: "Subcontainer",
        buildingIndex:
        "This project has a large number of objects. Please " +
        "wait a moment and try again.",
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
            msg: "Kirjaudu Haka-tunnuksella",
            href: "/login",
          },
          {
            msg: "Kirjaudu CSC-tunnuksella",
            href: "/loginpassword",
          },
        ],
      },
      error: {
        inUse: "Kontin nimi on jo käytössä.",
        inUseOtherPrj: "Kontin nimi on jo käytössä toisessa projektissa.",
        invalidName: "Kontin nimi tai asiasana ei kelpaa.",
        createFail: "Kontin luonti epäonnistui.",
        forbiddenChars: "Kontin nimi ei voi sisältää muita " +
        "erikoismerkkejä kuin piste(.), viiva(-) ja alaviiva(_)",
        segments: "Kontin nimi ei saa päättyä '_segments'.",
      },
      dropFiles: "Vedä ja pudota kontit tähän tai ",
      createFolder: "Luo Kontti",
      program_name: "Allas Web UI",
      program_description: "Allas Web UI tarjoaa yksinkertaisen " +
          "web-käyttöliittymän CSC:n Object Storage -palveluun, Altaaseen.",
      helplink: "https://docs.csc.fi/data/Allas/",
      folderTabs: {
        all: "Kaikki kontit",
        sharedFrom: "Jakamasi kontit",
        sharedTo: "Sinulle jaetut kontit",
      },
      folderDetails: {
        notShared: "Tätä konttia ei ole jaettu toiselle projektille.",
        sharing_to_one_project: "Tämä kontti on jaettu yhdelle projektille.",
        sharing_to_many_projects: "Tämä kontti on jaettu useille projekteille.",
        shared_with_view:
          "Voit tarkastella tätä konttia. (@:message.share.view_perm)",
        shared_with_read:
          "Voit kopioida konttisi, ladata " +
          "objekteja tässä kontissa ja purkaa kontin sisällön " +
          "salauksen. (@:message.share.read_perm)",
        shared_with_read_write:
          "Voit kopioida ja ladata " +
          "objekteja sekä purkaa kontin sisällön salauksen. " +
          "Voit lähettää uusia tai poistaa jo kontissa olevia objekteja. " +
          "(@:message.share.write_perm)",
      },
      table: {
        folderDetails: "Ei yksityiskohtia kontteille",
        fileDown: "Objektin lataus",
        item: "Objekti",
        items: "Objektit",
        itemsPerPage: "Objektit sivulla: ",
      },
      tableOptions: {
        render: "Näytä objektit konteissa",
        text: "Näytä objektit polkuina",
      },
      share: {
        share_id_tooltip:
          "Tällä toiminnolla voit kopioida jakamistunnuksen: uniikin " +
          "32-numeroisen koodin, joka on yhdistetty {tooltipb} " +
          "projektiin. Lähetä tunnus (esim. sähköpostilla) muiden projektien " +
          "jäsenille, niin he voivat jakaa kontteja sinulle.",
        instructions: "Kuinka jaan kontin",
        share_title: "Jaa kontti",
        share_guide_intro: "Kun haluat jakaa kontin toisen projektin kanssa: ",
        share_guide_step1:
          "Sinun tulee tietää " +
          "vastaanottavan projektin jakamistunnus (32-numeroinen " +
          "koodi). Vastaanottaja voi kopioida " +
          "jakamistunnuksen Kopioi jakamistunnus -napilla " +
          "ja lähettää sen sinulle esim. sähköpostilla. " +
          "Voit jakaa kontin useiden projektien kanssa.",
        view_perm_desc:
          ": Vastaanottavan projektin jäsenet voivat tarkastella kontin " +
          "sisältöä. Käytä tätä, kun tarvitset varmuuden, ettei " +
          "ojektijasi jaeta eteenpäin. Huomaa, että " +
          "sinun tulee olla myös vastaanottavan projektin omistaja.",
        read_perm: "Siirrä objektit",
        read_perm_desc:
          ": Vastaanottavan projektin jäsenet voivat kopioida konttisi " +
          ", ladata objektit sekä purkaa kontin sisällön salauksen. " +
          "Käytä tätä, kun haluat siirtää objektejasi toiselle projektille.",
        write_perm_desc:
          ": @:message.share.read_perm -oikeuksien lisäksi vastaanottavan " +
          "projektin jäsenet voivat lähettää uusia tai poistaa jo kontissa " +
          "olevia objekteja. Käytä tätä, kun haluat käyttää " +
          "konttia jaettuna työtilana.",
        shared_successfully: "Kontin jakaminen onnistui.",
        shared_table_title: "Tämä kontti on jaettu",
        fail_duplicate: "Kontti on jo jaettu kyseiselle projektille.",
        emptyContainer: "Tämä kontti on tyhjä.",
      },
      emptyProject: {
        all: "Tässä projektissa ei ole kontteja.",
        sharedFrom: "Et ole jakanut yhtään konttia.",
        sharedTo: "Sinulle ei ole jaettu kontteja.",
      },
      containers: "Kontit - ",
      download: {
        files: "Objektit voidaan ladata vain " +
          "erikseen, koska objektien tai alikontioiden nimet ovat " +
          "yli 99 merkkiä pitkiä.",
        gathering: "Haetaan listaa objektitiedostoista",
        warnTempFiles: "Väliaikaisten objektien tai kontioiden " +
        "(.crdownload, .crswap) avaaminen voi keskeyttää latauksen.",
      },
      upload: {
        duplicate: "Objektit, joilla on samat polut, eivät ole sallittuja.",
        sizeZero: "Tyhjiä objekteja ei voi lähettää.",
        viewDestinationFolder: "Näytä kohdekontti",
        uploadedItems: "Lähetetyt objektit näytetään pian",
        addFiles: "Lisää ladattavat objektit.",
        accessFail: "Konttiin ei ole pääsyä.",
      },
      copysuccess: "Konttia kopioidaan",
      copyfail: "Kontin kopiointi epäonnistui",
      notDecryptable: "Salauksen purkaminen epäonnistui osassa objekteista.",
      container_ops: {
        addContainer: "Luo uusi Kontti",
        norename:
          "Konttia ei voi nimetä uudelleen, " +
          "mutta sen voi kopioida uudella nimellä.",
        createdFolder: "Luotu kontti jaetaan kaikille jäsenille projektissa ",
        viewProjectMembers: "Näytä projektin jäsenet",
        deleteNote:
          "Kontin poistaminen edellyttää kaikkien " +
          "objektien poistamista ensin.",
        deleteSuccess: "Kontti poistettu",
        folderName: "Kontin nimi",
      },
      subfolders: {
        deleteNote:
          "Alikontin poistaminen edellyttää sen kaikkien " +
          "objektien poistamista.",
        deleteOneSuccess: "Alikontti poistettu.",
        deleteManySuccess: "Alikontit poistettu.",
      },
      objects: {
        file: "Objekti ",
        files: "Objektit ",
        overwriteConfirm:
          " on jo olemassa. Haluatko korvata objektin? " +
          "(Edellinen objekti poistetaan.)",
        overwriteConfirmMany:
          " ovat jo olemassa. Haluatko korvata Objektit? " +
          "(Edelliset objektit poistetaan.)",
        deleteConfirm: "Poista objektit",
        deleteObjects: "Poista objektit",
        deleteManySuccess: " objektit poistettu",
        deleteOneSuccess: " objekti poistettu",
        deleteSharedObjects:
         "Tällä toiminnolla poistat " +
         "objektit jaetusta kontiosta pysyvästi. " +
         "Haluatko varmasti poistaa nämä objektit?",
        deleteObjectsMessage:
          "Objekteja ei voi palauttaa poistamisen jälkeen. " +
          "Haluatko varmasti poistaa nämä objektit?",
      },
      replicate: {
        copy_folder: "Kopioi kontti: ",
        name_newFolder: "Nimeä uusi kontti",
      },
      encrypt: {
        uploadFiles: "Lataa objektit",
        uploadDestination: "Kohdekontti: ",
        upload_step1: "Luo uusi kontti",
        upload_step2: "Ladattavat objektit",
        dropMsg: "Valitse objektit",
        empty: "Ei valittuja objekteja",
        uploadedFiles:
          "Lähetetyt objektit jaetaan kaikille jäsenille projektissa ",
        uploadedToShared:
          "ja myös kaikille jäsenille muissa projekteissa, " +
          "joilla on pääsy tähän jaettuun konttiin.",
      },
      search: {
        container: "Kontti",
        object: "Objekti",
        folder: "Alikontti",
        objects: "Objektit",
        buildingIndex:
          "Tässä projektissa on paljon objekteja. Odota " +
          "hetki ja yritä uudelleen.",
      },
      select: {
        description:
          "Käyttäjällä on pääsy rajoitettuihin projekteihin. " +
          "Selatessa rajoitettua projektia käyttöliittymän pääsy on " +
          "rajattu, eli vain rajatun projektin sisältö on näkyvissä. " +
          "Objektin kopiointi ja siirto projektista toiseen, ja " +
          "muiden projektien sisällön selailu on estetty. Valitse " +
          "projekti, jota haluat käyttää. Valinnan jälkeen projektin " +
          "vaihto onnistuu vain kirjautumalla ulos. Mikäli haluat " +
          "selailla vain rajoittamattomia projekteja, paina " +
          "rajoittamattomien projektien nappia alla.",
      },
    },
    label: {
      folder_tabs: "erityyppisiä kontteja",
      searchbox: "etsi kontteja",
    },
  },
};


export default bucket_overrides;
