import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

export const NavigationPanel = () => {
	const [key, setKey] = useState("home");
	return (
		<>

			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(k: any) => setKey(k)}
				className="mb-3"

			>

				<Tab eventKey="home" title="Home">
					a
				</Tab>
				<Tab eventKey="profile" title="Profile">
					b
				</Tab>
				<Tab eventKey="contact" title="Contact" >
					c
				</Tab>
			</Tabs>
		</>
	)
}