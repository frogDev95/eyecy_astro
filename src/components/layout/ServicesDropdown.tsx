import { useEffect, useRef, useState } from "react";
import { HEADER_MENU_LIST } from "../../constants.js";

export default function ServicesDropdown() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const initialActiveIndex = 0;

    const servicesSection = HEADER_MENU_LIST.find((item) => item.label === "SERVICES");
    const servicesData =
        servicesSection?.subItems?.map((section) => ({
            label: section.label,
            items: section.subItems ?? [],
            image: section.image ?? "/images/common/logo.png",
        })) ?? [];
    const wrapperRef = useRef<HTMLDivElement>(null);
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeDropdown = () => {
        setOpen(false);
        setActiveIndex(initialActiveIndex);
    };

    const scheduleClose = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
        }
        closeTimerRef.current = setTimeout(() => {
            closeDropdown();
            closeTimerRef.current = null;
        }, 180);
    };

    const cancelClose = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            cancelClose();
        };
    }, []);

    const current = servicesData[activeIndex] || servicesData[0];
    const isWebHosting = current?.label === "Web Hosting";

    return (
        <div
            ref={wrapperRef}
            className="services-dropdown-wrapper"
            onMouseEnter={() => {
                cancelClose();
                setOpen(true);
            }}
            onMouseLeave={scheduleClose}
        >
            <button
                className="services-btn"
                aria-expanded={open}
                aria-haspopup="true"
                aria-controls="servicesMenuPopup"
                onClick={(event) => {
                    event.preventDefault();
                    cancelClose();
                    if (open) {
                        closeDropdown();
                        return;
                    }
                    setOpen(true);
                }}
            >
                SERVICES
            </button>

            <div
                id="servicesMenuPopup"
                className={`services-menu ${open ? "open" : ""}`}
                aria-hidden={!open}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
            >
                <div className="services-menu-left" id="servicesMenuLeft">
                    <ul>
                        {servicesData.map((section, index) => (
                            <li key={section.label}>
                                <button
                                    type="button"
                                    className={`services-left-item ${activeIndex === index ? "active" : ""}`}
                                    data-index={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {section.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="services-menu-right" id="servicesMenuRight">
                    {isWebHosting ? (
                        <div className="web-hosting">
                            <div className="services-menu-right-column services-menu-right-primary">
                                {current.items
                                    .slice(0, 2)
                                    .map((item) => (
                                        <div key={item.label} className="services-group">
                                            <h4 className="services-group-title">{item.label}:</h4>
                                            <ul>
                                                {(item.subItems || []).map((sub) => (
                                                    <li key={sub.label}>
                                                        <a href="#">{sub.label}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                            </div>
                            <div className="services-menu-right-column services-menu-right-secondary">
                                <div className="services-menu-right-image" id="servicesMenuRightImage">
                                    <img src={current.image} alt={current.label} />
                                </div>
                                {
                                    current.items
                                        .slice(2, 3)
                                        .map((item) => (
                                            <div key={item.label} className="services-group">
                                                <h4 className="services-group-title">{item.label}:</h4>
                                                <ul>
                                                    {(item.subItems || []).map((sub) => (
                                                        <li key={sub.label}>
                                                            <a href="#">{sub.label}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="services-menu-right-items" id="servicesMenuRightItems">
                                <ul>
                                    {current.items.map((item) => (
                                        <li key={item.label}>
                                            <a href="#">{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="services-menu-right-image" id="servicesMenuRightImage">
                                <img src={current.image} alt={current.label} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
