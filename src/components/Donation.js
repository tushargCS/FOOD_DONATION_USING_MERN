import "./Donation.css";
import DonationData from "./DonationData";

const Donation=()=>{
    return(
        <div class="destination">
            <h1>Our Donations</h1>
            <p>Can you imagine a world without hunger?</p>

        <DonationData
        header="Rohit"
        text="   When I donate food, I feel a sense of fulfillment knowing that I am contributing to the well-being of my fellow human beings. Whether it's donating canned goods to a local food bank or dropping off a meal at a homeless shelter, every little bit helps.Food is a basic human need, and unfortunately, many people in our communities go hungry every day. By donating food, I hope to alleviate some of that hunger and provide comfort and nourishment to those who need it most. "
        image1 = "https://us.123rf.com/450wm/milkos/milkos2111/milkos211101702/176990912-charity-center-happy-black-senior-man-holding-box-with-donations-food-looking-and-smiling-at.jpg?ver=6"
        image2 = "https://images.pexels.com/photos/731504/pexels-photo-731504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        cName="first-des"
        />

<DonationData
        header="Simmy"
        text="Simmy, a school girl from a low-income family, could greatly benefit from a food donation website. Such a website could provide her and her family with access to nutritious meals, which they may not be able to afford otherwise. By requesting food donations through the website, Simmy could help alleviate food insecurity and ensure that her family has enough to eat. Additionally, the website could serve as a resource for Simmy to learn more about food waste, "
        image1 = "https://i.insider.com/543ed23b6da8118345f8c041?width=700"
        image2 = "https://cdn.givind.org/static/images/campaign/campaign-main.jpg" 
        cName="first-des-reverse"
        />

        </div>
    )

}

export default Donation;