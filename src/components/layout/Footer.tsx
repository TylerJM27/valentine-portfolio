import { Link } from "react-router";
import { navItems } from "../../data/navigation";
import { profile } from "../../data/profile";
import { resume } from "../../data/resume";
import { Star } from "../doodles/Star";
import { SocialLinks } from "../SocialLinks";

const footerLinkStyles =
    "inline-flex min-h-11 items-center hover:text-lime focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-2";

export function Footer() {
    return (
        <footer className="relative mt-20 bg-plum text-white">
            {/* A filled wave sitting on top of the band, so the footer's top
                edge looks cut out with scissors. Stretches to any width. */}
            <svg
                viewBox="0 0 400 30"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                className="absolute bottom-full -mb-px left-0 w-full h-6 sm:h-8 text-plum"
            >
                <path d="M0 30 V16 Q25 0 50 16 T100 16 T150 16 T200 16 T250 16 T300 16 T350 16 T400 16 V30 Z" />
            </svg>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-10 grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
                <div className="space-y-3">
                    <p className="flex items-center gap-2 font-display text-3xl">
                        {profile.name}
                        <Star className="size-6 text-lime animate-wiggle motion-reduce:animate-none" />
                    </p>
                    <p className="text-white/85">
                        {profile.roles.join(" · ")}
                    </p>
                    <SocialLinks links={profile.socialLinks} />
                </div>

                <nav aria-label="Footer">
                    <h2 className="font-display text-xl text-lime">Pages</h2>
                    <ul className="mt-1 grid grid-cols-2 gap-x-6">
                        <li>
                            <Link to="/" className={footerLinkStyles}>
                                Home
                            </Link>
                        </li>
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to} className={footerLinkStyles}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className="font-display text-xl text-lime">Get in touch</h2>
                    <ul className="mt-1">
                        <li>
                            <Link to="/resume#contact" className={footerLinkStyles}>
                                Contact form
                            </Link>
                        </li>
                        <li>
                            <a href={resume.pdfUrl} download className={footerLinkStyles}>
                                Download resume (PDF)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 text-sm text-white/70">
                © {new Date().getFullYear()} {profile.name}
            </p>
        </footer>
    );
}
