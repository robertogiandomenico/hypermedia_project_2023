<template>
    <Head>
        <Title>Contacts - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'CONTACTS'" />

        <div class="contacts-info">
            <div class="mail-number">
                <div class="text-1">Contact us for more information<br>about our investments</div>
                <div class="numbers">
                    <a class="small-transparent-btn" href="tel:123-456-7890">&#9742;&emsp;123-456-7890</a>
                    <a class="small-transparent-btn" href="tel:123-456-7891">&#9742;&emsp;123-456-7891</a>
                </div>
                <a class="small-transparent-btn" href="mailto:info@webwizards.com">
                    &#9993;&emsp;<strong>info@webwizards.com</strong></a>
                <div class="social-media">
                    <a href="https://twitter.com/home" target="_blank" aria-label="Link to Twitter"><img src="../assets/img/contacts/twitter_logo_hover.png" alt="Twitter Logo" class="twitter-logo-footer"></a>
                    <a href="https://www.instagram.com" target="_blank" aria-label="Link to Instagram"><img src="../assets/img/contacts/instagram_logo_hover.png" alt="Instagram Logo" class="instagram-logo-footer"></a>
                    <a href="https://www.linkedin.com" target="_blank" aria-label="Link to LinkedIn"><img src="../assets/img/contacts/linkedin_logo_hover.png" alt="LinkedIn Logo" class="linkedin-logo-footer"></a>
                </div>
            </div>
            <img alt="Team photo" src="../assets/img/contacts/contacts_photo.jpg" class="contacts-img">
        </div>

        <div class="form-cnt">
            <div class="form-description">
                <div class="form-title">Send us a message</div><br>
                <div class="form-text">Are you interested in partecipating?<br>Do you have some particular question?<br>Do not hesitate to contact us by compiling this form!</div>
            </div>
            <div class="form">
                <ContactForm></ContactForm>
            </div>
        </div>

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.972366525132!2d-0.12665052356223183!3d51.532066671818846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bfa8c541837%3A0xc2579139afeace3e!2sPlatform%20Nine%20and%20Three-Quarters!5e0!3m2!1sit!2sit!4v1686225616069!5m2!1sit!2sit" width="700" height="400" class="gmap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map pinned to our address"></iframe>
            <div class="map-description">
                <div class="text-2">You can find us here</div><br>
                <div class="address">Platform 9 ¾<br>King’s Cross, Euston Rd.<br>London, United Kingdom</div>
            </div>
        </div>

    </main>
</template>
  
<script setup>
    //Search Engine Optimization
    const description = ref('In this page you will find our contact information and our location.')
    const keywords = ref('Contact Us, email, phone number, address, location, social')

    useHead({
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
        ],
    })
</script>

<style scoped>
    .map, .contacts-info, .form-cnt {
        padding: 20px;
        justify-content: center;
        margin: 2% 5%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        float: left;
    }
    
    .contacts-img {
        align-self: center;
        width: 650px;
        height: auto;
        border-radius: 10px;
        margin-left: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .numbers{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        margin: 30px auto;
    }

    .map-description, .mail-number, .form-description {
        text-align: center;
        margin: auto;
        color: white;
        padding: 2vw 0;
    }

    .gmap {
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .small-transparent-btn, .address, .form-text {
        font-size: 3vh;
    }

    .text-1, .text-2, .form-title {
        font-weight: bold;
        font-size: 5vh;
        margin-top: 15px;
    }

    .social-media {
        padding-top: 2vh;
    }

    .twitter-logo-footer, .instagram-logo-footer, .linkedin-logo-footer {
        width: 40px;
        height: auto;
        padding-right: 10px;
        transition: ease-in-out 0.1s;
    }

    .twitter-logo-footer:hover, .instagram-logo-footer:hover, .linkedin-logo-footer:hover {
        transform: scale(1.2);
    }
    .form {
        width: 700px;
    }

    .form-cnt {
        background-color: rgba(255, 255, 255, 0.7);
        margin: 0;
        padding: 60px 30px;
    }

    .form-description {
        color: black
    }

    @media screen and (max-width: 768px) {
        .contacts-info {
            flex-direction: column;
            margin: 2% 0;
        }

        .contacts-img {
            width: 90%;
            margin: 0;
        }

        .form {
            width: 80%;
        }

        .form-cnt {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: 2% 0;
            padding: 20px;
            gap: 15px;
        }

        .map {
            width: 95%;
            margin: 30px 10px 10px;
            padding: 0;
        }

        .text-1, .text-2, .form-title {
            font-size: 3vh;
        }

        .address, .form-text {
            font-size: 2.2vh;
        }
    }
</style>