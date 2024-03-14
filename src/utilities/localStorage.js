const getLocalStorage = () => {
    const storedCart = localStorage.getItem('application');
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return [];
}

const saveLocalStorage = id => {
    const application = addToLocalStorage(id);
    const stringified = JSON.stringify(application);
    localStorage.setItem('application', stringified)
}

const addToLocalStorage = id => {
    const application = getLocalStorage();
    application.push(id)
    return application;
}

export {saveLocalStorage, getLocalStorage}