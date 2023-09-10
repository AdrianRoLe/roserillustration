import ContactForm from "./components/contactForm";

const ContactPage = () => {
	return (
		<div className="flex">
			<img
				className="ml-8"
				src="https://via.placeholder.com/150"
				alt="contact"
			/>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
