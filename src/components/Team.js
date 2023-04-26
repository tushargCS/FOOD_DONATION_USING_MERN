import "./TeamStyle.css";
import TeamData from "./TeamData"

function Team(){
    return (
        <div className="trip">
            <h1>Our Team</h1>
            <p>We're not getting younger. Today let's fight hunger!</p>
            <div className="tripcard">
                <TeamData

                image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
               
                heading="Tushar Gupta"

                text = "Welcome to Food Donation Website, the online platform that connects individuals, organizations, and businesses to reduce food waste and alleviate hunger in our communities. Our easy-to-use interface allows you to quickly and easily donate or request food donations from others.  "

                />

                <TeamData

                image="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

                heading="Rishabh Mishra"

                text = "At Food Donation website we believe that no one should go hungry and that nutritious food should be accessible to all Our platform is designed to facilitate the exchange of surplus food between individuals organizations and businesses to reduce food waste and support local communities."

                />

                <TeamData

                image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

                heading="Mayank Chandra"

                text = "At Food Donaion website  we are committed to ensuring transparency and accountability in our operations, and we strive to continuously improve our platform through user feedback and community involvement. Join us today and be a part of the solution to end hunger in our communities. "

                />
            </div>
        </div>
    )
}

export default Team;