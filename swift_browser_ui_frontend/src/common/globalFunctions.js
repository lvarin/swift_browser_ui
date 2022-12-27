import store from "@/common/store";

export function toggleCreateFolderModal(folderName) {
  store.commit("toggleCreateFolderModal", true);
  if (folderName) {
    store.commit("setFolderName", folderName);
  }
  modifyBrowserPageStyles();
}

export function toggleEditTagsModal(object) {
  store.commit("toggleEditTagsModal", true);
  const objectName = object.name.value;
  if (objectName) {
    store.commit("setObjectName", objectName);
  }
}

export function toggleCopyFolderModal(folderName, sourceProjectId) {
  store.commit("toggleCopyFolderModal", true);
  if (folderName) {
    store.commit("setFolderName", folderName);
  }
  if(sourceProjectId) {
    store.commit("setSourceProjectId", sourceProjectId);
  }
  modifyBrowserPageStyles();
}

export function modifyBrowserPageStyles() {
  const element = document.getElementById("subContainer");
  element.classList.toggle("subContainer-additionalStyles");
}

export function getProjectNumber(project) {
  if (project.name) {
    const splitProjectName = project.name.split("_");
    return splitProjectName.length > 1 ? splitProjectName[1] : "";
  } else {
    return "";
  }
}

export async function getSharingContainers (projectId) {
  return store.state.client && projectId
    ? await store.state.client.getShare(projectId)
    : [];
}

export async function getSharedContainers (projectId) {
  return store.state.client
    ? await store.state.client.getAccess(projectId)
    : [];
}



