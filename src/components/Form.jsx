import React from "react";

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      tel: "",
      eMail: "",
      comment: "",
      isActive: false,
    };
  }

  handleSumbit = (e) => {
    alert(
      "Mesajınız qəbul edildi,fikir bildirdiyiniz üçün 'Təşəkkür Edirik' :)"
    );
    e.preventDefault();
  };

  handleChange = (e) => {
    let key = e.target.id;
    let value = e.target.value;
    if (key === "firstName") {
      this.setState({ [key]: value });
    }
    if (key === "lastName") this.setState({ [key]: value });
    if (key === "tel") this.setState({ [key]: value });
    if (key === "eMail") this.setState({ [key]: value });
    if (key === "comment") this.setState({ [key]: value });
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.eMail !== "" &&
      this.state.comment !== ""
    ) {
      this.setState({ isActive: true });
    } else {
      this.setState({ isActive: false });
    }
  };

  render() {
    const { firstName, lastName, tel, eMail, comment, isActive } = this.state;
    return (
      <div className="container">
        <form id="feedback" onSubmit={this.handleSumbit}>
          <label>
            Ad:
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Soyad:
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Telefon:
            <input
              id="tel"
              name="tel"
              type="tel"
              value={tel}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              id="eMail"
              name="eMail"
              type="email"
              value={eMail}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Şərh:
            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={this.handleChange}
              required
            ></textarea>
          </label>
          <button id="btn" disabled={!isActive}>
            Göndər
          </button>
        </form>
      </div>
    );
  }
}
