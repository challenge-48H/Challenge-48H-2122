export default {    
        async question(number) 
        {
            var chaîne="",
            switch (number) {
                case 1:
                chaîne="Who is the Father of Luke Skywalker?.*Anakin*Dark Vador*Obi-wan*Han solo*1,2";
                break;
                case 2:
                chaîne="What happened to Anakin Skywalker during the battle with Count Dooku?.*He lost his left leg*He lost his right forearm*He lost his knee*He lost*2";
                break;
                case 3:
                chaîne="What is Chewbacca's weapon of choice?.*Fusil blaster*Laser sword*Metal Club*Bowcaster*4";
                break;
                case 4:
                chaîne="How many Stars are built by the Empire?.*One*Two*Three*None*1";
                break;
                case 5:
                chaîne="What was the title of the first Star Wars film?.*A new hope*The adventures of the Jedi*Adventures of Luke Starkiller*Battles in space*1";
                break;
            }
            return chaîne;
        }
};