import "./TeamStyle.css";
import TeamData from "./TeamData"

function OS(){
    return (
        <div className="trip">
            <h1>Our Services</h1>
            <p>We're not getting younger. Today let's fight hunger!</p>
            <div className="tripcard">
                <TeamData

                image="https://media.istockphoto.com/id/1283154274/photo/woman-holding-cardboard-donation-box-full-with-folded-clothes.jpg?s=612x612&w=0&k=20&c=bqJFhv_hRXV3Milqrmuh54eyIiScjgqP6z0iwnnT84I="
               
                heading="Cloth Donation"

                text = "Books have the power to change lives, and through our book donation program, you can help us spread the joy of reading to those in need. We accept donations of new or gently used books, from children's picture books to novels for adults. Your donations help us to create a library of books that can be accessed by everyone in our community, regardless of income or circumstance.  "

                />

                <TeamData

                image="https://cdn.givind.org/static/images/campaign/target-image1.jpg"

                heading="Food Donation"

                text = "Food is a basic human need, and unfortunately, many in our community are struggling to put enough food on the table. With your help, we can change that. Our food donation program accepts all types of non-perishable food items, as well as fresh produce and meats. Your donations help us to provide nourishing meals to those who are food insecure and struggling to make ends meet. With each donation."

                />

                <TeamData

                image="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/08/Pictures/_2b9e0c8c-75cc-11e6-9bc1-888b3aba2d1d.jpg"

                heading="Book Donation"

                text = "Every day, individuals and families in our community struggle to afford basic necessities, including clothing. Through our clothing donation program, you can help us make a difference in their lives. We accept donations of all types of clothing, from infant to adult sizes, as well as accessories like shoes, bags, and hats. Your donations help us to provide clothing to those in need. "

                />
            </div>
        </div>
    )
}

export default OS;