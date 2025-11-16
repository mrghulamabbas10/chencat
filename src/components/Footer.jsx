import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black pb-12 lg:pb-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Logo and Navigation */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <img
                  src="/images/logo.png"
                  alt="Chencat"
                  className="w-[53px] h-[53px]"
                />
                <span className="text-white text-[22px] font-semibold font-raveo">
                  Chencat
                </span>
              </div>
              <a
                href="mailto:contact@chencatlabs.com"
                className="px-2 py-3 text-sm bg-[#00E6C5] text-black rounded"
              >
                Apply to join Chencat
              </a>
            </div>

            {/* Navigation columns */}
            <div className="flex flex-wrap gap-8 lg:gap-[20px]">
              {/* Product */}
              <div className="w-[110px]">
                <h3 className="text-white text-[13px] leading-[16.9px] font-medium mb-4">
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="w-[110px]">
                <h3 className="text-white text-[13px] leading-[16.9px] font-medium mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="w-[110px]">
                <h3 className="text-white text-[13px] leading-[16.9px] font-medium mb-4">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[16.9px] font-medium hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 border-t border-[rgba(255,255,255,0.05)]">
          <div>
            <p className="text-[rgba(255,255,255,0.25)] text-[13px] leading-[14.08px] font-normal">
              © 2025 Chencat Labs.
            </p>
            <p className="text-[rgba(255,255,255,0.25)] text-[13px] leading-[16.9px] font-normal mt-1">
              All rights reserved
            </p>
          </div>

          {/* Social as */}
          <div className="flex gap-4">
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="X (Twitter)"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube />
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="TikTok"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
