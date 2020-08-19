import React, { useState } from 'react';


const Contact = () => {

	const [data, setData] = useState({
		fullname:'',
		phone:'',
		email:'',
		msg:'',
	});

	const InputEvent = (event) => {
		const { name, value } = event.target;
		setData((preVal) => {
			return {
				...preVal,
				[name] : value,
			};
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		alert(
			`My name is ${data.fullname}. My Mobile number is ${data.phone} and Email is ${data.email}, Here is what I want to say ${data.msg} `
			);
	}

	return (
		<>
			<div className="my-5">
				<h1 className="text-center"> Contact Us </h1>
			</div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div className="mb-3">
								<label>Full Name :</label>
								<input type="text" className="form-control" id="exampleInputEmail1" 
								name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Fullname" />
							</div>

							<div className="mb-3">
								<label>Phone :</label>
								<input type="number" className="form-control" id="exampleInputEmail1"
								 name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Mobile no." />
							</div>

							<div className="mb-3">
								<label>Email :</label>
								<input type="email" className="form-control" id="exampleInputEmail1"
								 name="email" value={data.email} onChange={InputEvent} placeholder="Enter Email." />
							</div>

							<div className="mb-3">
								<label for="exampleInputPassword1">Message :</label>
								<textarea className="form-control" rows="3" name="msg"
								 value={data.msg} onChange={InputEvent}></textarea>
							</div>
							<button type="submit" className="btn btn-outline-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;