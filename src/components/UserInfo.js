export default class UserInfo {
  //   constructor(nameSelector, aboutSelector) {
  //     this._nameElement = document.querySelector(nameSelector);
  //     this._aboutElement = document.querySelector(aboutSelector);
  //   }

  //   getUserInfo() {
  //     const userInfo = {
  //       title: this._nameElement.textContent,
  //       description: this._aboutElement.textContent,
  //     };
  //     return userInfo;
  //   }

  //   setUserInfo(data) {
  //     this._nameElement.textContent = data.title;
  //     this._aboutElement.textContent = data.description;
  //   }
  // }

  constructor(nameSelector, aboutSelector) {
    console.log(nameSelector, aboutSelector);
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      title: this._nameElement.textContent,
      description: this._aboutElement.textContent,
    };
  }

  setUserInfo({ title, description }) {
    console.log(this._nameElement);
    this._nameElement.textContent = title;
    this._aboutElement.textContent = description;
  }
}
