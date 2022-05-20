import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import axios from "axios";
import AddHotelModal from "../modals/addHotel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ hotels, jwt, messages }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isOpen, setIsOpen] = useState(false);
  console.log(hotels);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Hotels" {...a11yProps(0)} />
          <Tab label="Messages" {...a11yProps(1)} />
          <Tab label="Enquiries" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <table className="admintable">
          {" "}
          <tr>
            <th className="w-52">ID</th>
            <th className="w-52">Title</th>
            <th className="w-52">Price</th>
            <th className="w-52">Location</th>
            <th className="w-80">Adress</th>
            <th className="w-80">Imageurl</th>
          </tr>
          {hotels.map((hotel) => (
            <Table key={hotel.id} jwt={jwt} hotel={hotel} />
          ))}
        </table>
        <button className="addNew_Hotel" onClick={() => setIsOpen(true)}>
          Add New Hotel
        </button>
        {isOpen && <AddHotelModal jwt={jwt} setIsOpen={setIsOpen} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <table className="messageTable">
          {" "}
          <tr>
            <th className="w-52">Message ID</th>
            <th className="w-52">Name</th>
            <th className="w-52">Subject</th>
            <th className="w-52">Email</th>
            <th className="w-80">Message</th>
          </tr>
          {messages.map((messages) => (
            <MessageTable key={messages.id} jwt={jwt} messages={messages} />
          ))}
        </table>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <table className="messageTable">
          {" "}
          <tr>
            <th className="w-52">Message ID</th>
            <th className="w-52">Name</th>
            <th className="w-52">Subject</th>
            <th className="w-52">Email</th>
            <th className="w-80">Message</th>
          </tr>
          {messages.map((enquiries) => (
            <EnquiriesTable key={enquiries.id} enquiries={enquiries} />
          ))}
        </table>
      </TabPanel>
    </Box>
  );
}

{
}

function Table({
  jwt,
  hotel: { id, title, location, adress, price, imageurl },
}) {
  const router = useRouter();

  return (
    <tr className="wholeTable">
      <td className="text-center w-52">{id}</td>
      <td className="text-center w-52">{title}</td>
      <td className="text-center w-52">{price}</td>
      <td className="text-center w-52">{location}</td>
      <td className="text-center w-52">{adress}</td>
      <td className="text-center w-52">{imageurl}</td>
      <td className="w-52">
        <button
          onClick={() => {
            async function deletedata() {
              let response = await axios.delete(
                `http://localhost:1337/hotels/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${jwt}`,
                  },
                }
              );
              alert("Hotel is successfully deleted");
              router.replace(router.asPath);
            }
            deletedata();
            console.log(id);
          }}
        >
          {" "}
          <Icon
            className="trashicon"
            icon="ant-design:delete-filled"
            color="red"
          />
        </button>
      </td>
    </tr>
  );
}

function MessageTable({
  jwt,
  messages: { id, Name, Subject, Message, Email },
}) {
  const router = useRouter();
  console.log("jwt", jwt);
  return (
    <tr className="wholeMessageTable">
      <td className="text-center w-52">{id}</td>
      <td className="text-center w-52">{Name}</td>
      <td className="text-center w-52">{Subject}</td>
      <td className="text-center w-52">{Email}</td>
      <td className="text-center w-52">{Message}</td>
      <td className="w-52">
        <button
          onClick={() => {
            async function deleteMessage() {
              let response = await axios.delete(
                `http://localhost:1337/messages/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${jwt}`,
                  },
                }
              );
              console.log(response);
              alert("Message is fully deleted");
              router.replace(router.asPath);
            }
            deleteMessage();
          }}
        >
          {" "}
          <Icon
            className="trashicon"
            icon="ant-design:delete-filled"
            color="red"
          />
        </button>
      </td>
    </tr>
  );
}

function EnquiriesTable({
  jwt,
  enquiries: { id, FirstName, LastName, Subject, Message },
}) {
  const router = useRouter();
  console.log("jwt", jwt);
  return (
    <tr className="wholeEnquiriesTable">
      <td className="text-center w-52">{id}</td>
      <td className="text-center w-52">{FirstName}</td>
      <td className="text-center w-52">{LastName}</td>
      <td className="text-center w-52">{Subject}</td>
      <td className="text-center w-52">{Message}</td>
      <td className="w-52">
        <button
          onClick={() => {
            console.log(id);
            async function deleteEnquiries() {
              let response = await axios.delete(
                `http://localhost:1337/enquiries/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${jwt}`,
                  },
                }
              );

              console.log(response);
              alert("Enquirie is deleted");
              router.replace(router.asPath);
            }
            deleteEnquiries();
          }}
        >
          {" "}
          <Icon
            className="trashicon"
            icon="ant-design:delete-filled"
            color="red"
          />
        </button>
      </td>
    </tr>
  );
}
