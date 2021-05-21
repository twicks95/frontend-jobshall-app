import React, { Component } from "react";
import styles from "../Register.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../assets/img/Group 978 1.png";
import logo1 from "../../../../assets/img/Group 980 1.png";

class RegisterRecruiter extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        recruiterName: "",
        recruiterEmail: "",
        recruiterCompany: "",
        recruiterFieldCompany: "",
        recruiterPhone: "",
        recruiterPassword: "",
        recruiterConPass: "",
      },
    };
  }
  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
    if (this.state.form.workerConfirm === event.target.value.workerPassword) {
      console.log("work");
    } else {
      console.log("Salah");
    }
  };
  render() {
    const {
      recruiterName,
      recruiterEmail,
      recruiterCompany,
      recruiterFieldCompany,
      recruiterPhone,
      recruiterPassword,
      recruiterConPass,
    } = this.state.form;
    console.log(this.state.form);
    return (
      <>
        <Container>
          <Row className={styles.main}>
            <Col sm={6} className={styles.mainImg}>
              <div className={styles.layer}>&nbsp;</div>
              <div className={styles.coverText}>
                <img alt="" src={logo} className={styles.logo} />

                <h1 className={styles.subText}>
                  Temukan developer
                  <br /> berbakat & terbaik
                  <br /> di berbagai bidang <br />
                  keahlian
                </h1>
              </div>
            </Col>
            <Col sm={6} className={styles.colBottom}>
              <img alt="" src={logo1} className={styles.logo1} />
              <h1 className={styles.title}>Halo, Pewpeople</h1>
              <h1 className={styles.title1}>Sign Up</h1>
              <p className={styles.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <p className={styles.subTitle1}>
                Lorom ipsum dolor si amet uegas anet.
              </p>
              <Form className={styles.mainForm}>
                <Form.Group controlId="formBasicName">
                  <Form.Label className={styles.label}>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan nama panjang"
                    className={styles.control}
                    name="recruiterName"
                    value={recruiterName}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={styles.label1}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukan alamat email"
                    className={styles.control}
                    name="recruiterEmail"
                    value={recruiterEmail}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCompany">
                  <Form.Label className={styles.label1}>Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan nama perusahaan"
                    className={styles.control}
                    name="recruiterCompany"
                    value={recruiterCompany}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicField">
                  <Form.Label className={styles.label1}>
                    Bidang Perusahaan
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Bidang perusahaan anda"
                    className={styles.control}
                    name="recruiterFieldCompany"
                    value={recruiterFieldCompany}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label className={styles.label1}>
                    No handphone
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Masukan no handphone"
                    className={styles.control}
                    name="recruiterPhone"
                    value={recruiterPhone}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPass">
                  <Form.Label className={styles.label1}>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi"
                    className={styles.control}
                    name="recruiterPassword"
                    value={recruiterPassword}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConPass">
                  <Form.Label className={styles.label1}>
                    Konfirmasi kata Sandi
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan konfirmasi kata sandi"
                    className={styles.control}
                    name="recruiterConPass"
                    value={recruiterConPass}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
              </Form>

              <Button block className={styles.btnSubmit}>
                Daftar
              </Button>

              <p className={styles.register}>
                Anda sudah punya akun?{" "}
                <Link to="#" className={styles.onReg}>
                  Masuk disini
                </Link>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RegisterRecruiter;