export const IS_PARENT = 1;
export const IS_CHILD = 0;

export const HEADER_MENU_LIST = [
    { label: "HOME", type: IS_CHILD },
    { label: "ABOUT", type: IS_CHILD },
    {
        label: "SERVICES",
        type: IS_PARENT,
        subItems: [
            {
                label: "Website Development",
                type: IS_PARENT,
                image: "/images/home/service/website-development.avif",
                subItems: [
                    { label: "Responsive Website Development", type: IS_CHILD },
                    { label: "Mobile App Development", type: IS_CHILD },
                    { label: "Content Management System", type: IS_CHILD },
                    { label: "WordPress Development", type: IS_CHILD },
                    { label: "Online Payment System", type: IS_CHILD },
                    { label: "E-commerce Development", type: IS_CHILD },
                ],
            },
            {
                label: "Creative Design",
                type: IS_PARENT,
                image: "/images/home/service/creative-design.avif",
                subItems: [
                    { label: "Website Design", type: IS_CHILD },
                    { label: "E-commerce Design", type: IS_CHILD },
                    { label: "Logo Design", type: IS_CHILD },
                    { label: "Brand Design", type: IS_CHILD },
                    { label: "Mobile Design", type: IS_CHILD },
                    { label: "Print Design", type: IS_CHILD },
                ],
            },
            {
                label: "Online Marketing",
                type: IS_PARENT,
                image: "/images/home/service/online-marketing.avif",
                subItems: [
                    { label: "SEO", type: IS_CHILD },
                    { label: "PPC", type: IS_CHILD },
                    { label: "Email Marketing", type: IS_CHILD },
                    { label: "Social Media Marketing", type: IS_CHILD },
                    { label: "Conversion Rate Optimization", type: IS_CHILD },
                    { label: "Content Strategy & Copywriting", type: IS_CHILD },
                ],
            },
            {
                label: "Brand",
                type: IS_PARENT,
                image: "/images/home/service/brand.avif",
                subItems: [
                    { label: "Brand Strategy", type: IS_CHILD },
                    { label: "Brand Identity", type: IS_CHILD },
                    { label: "Brand Development", type: IS_CHILD },
                    { label: "Brand Collateral Design", type: IS_CHILD },
                    { label: "Brand Consulting", type: IS_CHILD },
                    { label: "Event Branding", type: IS_CHILD },
                    { label: "Brand Research", type: IS_CHILD },
                ],
            },
            {
                label: "Web Hosting",
                type: IS_PARENT,
                image: "/images/home/service/web-hosting.avif",
                subItems: [
                    {
                        label: "Solutions",
                        type: IS_PARENT,
                        subItems: [
                            { label: "Enterprise", type: IS_CHILD },
                            { label: "Agency", type: IS_CHILD },
                            { label: "E-Commerce Hosting", type: IS_CHILD },
                            { label: "Small Businesses", type: IS_CHILD },
                            { label: "Non-profit organization", type: IS_CHILD },
                            { label: "Single high-resource site", type: IS_CHILD },
                        ],
                    },
                    {
                        label: "Features",
                        type: IS_PARENT,
                        subItems: [
                            { label: "Speed & Performance", type: IS_CHILD },
                            { label: "Expert Support", type: IS_CHILD },
                            { label: "Security", type: IS_CHILD },
                            { label: "Autoscale", type: IS_CHILD },
                        ],
                    },
                    {
                        label: "Tools & Services",
                        type: IS_PARENT,
                        subItems: [
                            { label: "Cloudflare Integration", type: IS_CHILD },
                            { label: "Free site migrations", type: IS_CHILD },
                            { label: "Addons", type: IS_CHILD },
                            { label: "Edge Caching", type: IS_CHILD },
                            { label: "WordPress Hosting", type: IS_CHILD },
                            { label: "Static Site Hosting", type: IS_CHILD },
                            { label: "Managed Database Hosting", type: IS_CHILD },
                        ],
                    },
                ],
            },
        ],
    },
    { label: "PORTFOLIO", type: IS_CHILD },
    { label: "PROJECTS", type: IS_CHILD },
    { label: "BLOG", type: IS_CHILD },
    { label: "CONTACT", type: IS_CHILD },
]; 