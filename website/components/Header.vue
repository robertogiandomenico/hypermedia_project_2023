<template>
    <header :class="{ 'header-transparent': isHomePage, 'header-colored': !isHomePage }">
        <nav>
            
            <div class="branding">
                <NuxtLink to="/" title="Homepage">
                    <img src="../assets/img/logo.png" id="logo" class="logo-header" alt="Company logo"/>
                </NuxtLink>
            </div>
            
            <!-- desktop version landmarks -->
            <ul v-if="!mobile" class="navigation">
                <li v-for="link in links" :key="link.path"><NuxtLink class="landmark" :to="link.path" :aria-label="`Link to ${link.title}`">{{ link.title }}</NuxtLink></li>
            </ul>   

            <!-- mobile version hamburger menu -->
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="hamburger-menu" :class="{ 'icon-active': mobileNav }">
                    <svg viewBox="0 0 100 67" width="40" height="40">
                        <rect y="00" width="100" height="17" rx="10"></rect>
                        <rect y="33" width="100" height="17" rx="10"></rect>
                        <rect y="66" width="100" height="17" rx="10"></rect>
                    </svg>
                </i>
            </div>

            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav" :class="{ 'inverted': isHomePage, '': !isHomePage }" ref="dropdownNav">
                    <NuxtLink to="/" title="Homepage">
                        <img src="../assets/img/logo.png" class="logo-mobile" alt="Company logo" @click="toggleMobileNav" />
                    </NuxtLink>
                    <hr class="separator-mobile" />
                    <li v-for="link in links"><NuxtLink @click="toggleMobileNav" class="landmark-mobile" :to="link.path" :aria-label="`Link to ${link.title}`">{{ link.title }}</NuxtLink></li>
                    <li @click="toggleMobileNav" class="close-cross">&#10006;</li>
                </ul>
            </transition>
            
            <transition name="dropdown-overlay">
                <div v-if="mobileNav" class="dropdown-overlay" :class="{ 'inverted': isHomePage, '': !isHomePage }" @click="toggleMobileNav"></div>
            </transition>

        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                mobile: null,
                mobileNav: null,
                windowWidth: null,
                isHomePage: true,
                links: [
                    { title: 'Most Relevant Projects', path: '/most_relevant_projects' },
                    { title: 'Portfolio', path: '/portfolio' },
                    { title: 'Projects', path: '/projects' },
                    { title: 'Projects By Area', path: '/projects_by_area' },
                    { title: 'Areas', path: '/all_areas' },
                    { title: 'Our Team', path: '/our_team' },
                    { title: 'About Us', path: '/about_us' },
                    { title: 'Contacts', path: '/contacts' },
                ],
            };
        },

        mounted() {
            if (process.client) {
                window.addEventListener('resize', this.checkScreen);
                this.checkScreen();

                document.addEventListener('click', this.handleClickOutside);

                window.onload = () => {
                    //check if the current route is the homepage
                    this.isHomePage = this.$route.path == '/' ? true : false;
                };

                //watch for route changes and update isHomePage boolean accordingly
                this.$watch('$route', (to) => {
                    this.isHomePage = to.path == '/';
                }, { immediate: true });

                window.addEventListener('scroll', () => {
                        //check if the current route is the homepage and scrolled to the top
                        this.isHomePage = this.$route.path === '/' && window.pageYOffset === 0;
                    }
                );
            }
        },

        beforeUnmount() {
            if (process.client) {
                window.removeEventListener('resize', this.checkScreen);
                document.removeEventListener('click', this.handleClickOutside);
            }
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
                if (this.mobileNav) {
                    document.documentElement.style.overflow = 'hidden';
                } else {
                    document.documentElement.style.overflow = '';
                }
            },

            checkScreen() {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth < 1060) {
                    this.mobile = true;
                } else {
                    this.mobile = false;
                    this.mobileNav = false;
                    document.documentElement.style.overflow = '';
                }
            },

            handleClickOutside(event) {
                if (!this.$refs.dropdownNav.contains(event.target) && !this.$refs.dropdownNav.previousElementSibling.contains(event.target)) {
                    this.mobileNav = false;
                }
            },
        },
    };
</script>

<style>

    .inverted {
        filter: invert(1) !important;
    }

    header {
        background-color: #E8EEF1;
        position: sticky;
        top: 0;
        z-index: 99;
        max-width: 100%;
        border-bottom: 5px solid #1E3D58;
        transition: 0.3s ease all;
        color: black;
        text-align: center;
    }

    .header-transparent {
        border-bottom: 5px solid transparent;
        filter: invert(1) !important;
        background-color: transparent;
    }

    .header-colored {
        background-color: #E8EEF1;
        border-bottom: 5px solid #1E3D58;
        color: black;
    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: 0.2s ease all;
        width: 95%;
        margin: 0 auto;
    }

    ul, .link {
        font-weight: 600;
        color: inherit;
        list-style: none;
        text-decoration: none;
    }

    li {
        text-transform: uppercase;
        padding: 15px;
    }

    .link {
        font-size: 14px;
        transition: 0.2s ease all;
        padding-bottom: 4px;
    }

    .branding {
        display: flex;
        align-items: center;
        margin: 0.5vh 1vh;
    }

    .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        gap: 0.7vw;
    }

    .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
    }

    .hamburger-menu {
        cursor: pointer;
        transition: 0.5s ease all;
        padding: 7px 10px;
        border-radius: 50%;
    }

    .hamburger-menu:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .hamburger-menu:active {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .icon-active {
        transition: 0.8s ease all;
        transform: rotate(180deg);
    }

    .dropdown-nav {
        background-color: #E8EEF1;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        width: 60%;
        height: 100vh;
        min-width: 270px;
        top: 0;
        left: 0;
        margin-top: 0;
        z-index: 500;
        border-right: 5px solid #1E3D58;
    }

    .mobile-nav-enter-active, .mobile-nav-leave-active {
        transition: 1s ease all;
    }

    .mobile-nav-enter-from, .mobile-nav-leave-to {
        transform: translateX(-100%);
    }

    .mobile-nav-enter-to {
        transform: translateX(0);
    }

    .logo-mobile {
        max-width: 200px;
        min-width: 120px;
        height: auto;
        margin-top: 5vh;
    }

    .separator-mobile {
        margin: 3vh 0;
    }

    .close-cross {
        color: black;
        margin: 20px;
        transition: 0.3s;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }

    .close-cross:hover {
        color: rgb(200, 0, 0)  ;
        text-decoration: underline;
        text-underline-offset: 6px;
        transform: translateY(-5px);
    }

    .close-cross:active {
        transform: scale(0.95);
    }

    .dropdown-overlay {
        filter: invert(0);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
    }

    .dropdown-overlay-enter-active, .dropdown-overlay-leave-active {
        transition: opacity 0.5s;
    }

    .dropdown-overlay-enter-from, .dropdown-overlay-leave-to {
        opacity: 0;
    }

    .dropdown-overlay-enter-to, .dropdown-overlay-leave-from {
        opacity: 1;
    }

    .landmark, .landmark-mobile {
        padding: 0 10px;
        display: inline-block;
        transition: 0.3s;
    }

    .landmark {
        font-size: min(2.6vw, max(2.1vh, 13px));
        padding: 10px 0px;
    }

    .landmark:hover, .landmark-mobile:hover {
        color: #1E3D58;
        transform: translateY(-5px);
    }

    .landmark-mobile:hover {
        text-decoration: underline;
        text-underline-offset: 6px;
    }

    .landmark:active, .landmark-mobile:active {
        transform: scale(0.95);
    }

    .landmark::after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        background: #1E3D58;
        transition: all 0.3s;
    }

    .landmark:hover::after {
        width: 100%;
    }
</style>