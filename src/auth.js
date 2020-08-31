export const setToken = (response = null) => {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.data.expiresIn * 1000);

      localStorage.setItem('fb-token', response.data.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
}

const token = () => {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));

    if (new Date() > expDate) {
        logout();

        return null;
    }

    return localStorage.getItem('fb-token');
}

export const logout = () => {
    setToken(null);
}

export const isAuthenticated = () => {
    return !!token();
}