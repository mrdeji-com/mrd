import React, { useState } from 'react';
import Modal from 'react-modal'

const Services = () => {
    const [modal, setModal] = useState(false)

    return (
        <Modal isOpen={modal} onRequestClose={() => setModal(false)} className="footer-modal">
            <div className="services-modal-content">
                <h1>Privacy Policy</h1>
                <p>
                    When you request for a Strategy Session, you give us certain information voluntarily. This includes your name, email address, phone number, country, job role, business name and any other information that you may supply to us during our first session before the execution of a Non-Disclosure Agreement (NDA) form. <br /><br />

                    If you end up purchasing a service from mrdeji.com, we will collect payment information, contact information (billing address, invoice details, tax information and other relevant legal documents) with details of the services that you procure. If you refer us to someone else, we collect their corresponding details in the required fields sufficient to provide our service to them. <br /><br />

                    If you link your Facebook or Google Accounts or accounts from other third-party services to mrdeji.com, we also get information from those accounts (such as your friends and contacts). The information we get from those services depends on your settings and their privacy policies, so please check what those are.
                </p>
                <h3>Contact Us</h3>
                <h4>E-mail: contact@mrdeji.com</h4>
            </div>
        </Modal>
    )
}

export default Services