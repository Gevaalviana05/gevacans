import Metadata from "@/components/utilities/metadata";
import { gaEvent } from "@/utilities/ga";
import { phCapture } from "@/utilities/posthog";
import {
  FaGithub,
  FaGitlab,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Tentang Saya"
        description="Saya adalah seorang Cloud & Software Engineer"
        image="/metadata/home.png"
        url="tentang-saya"
      />

      <section className="pb-32 pt-32 transition duration-300 ease-in-out dark:bg-dark lg:pt-44">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-2 text-2xl font-semibold uppercase text-primary">
  Tentang Saya
</h4>

              <h2 className="mb-5 max-w-lg text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Menghubungkan Kreativitas Dengan{" "}
                <span className="ml-1 inline-block -rotate-1 rounded-xl bg-gradient-to-r via-primary/20 px-4 py-1.5 text-lg tracking-tight shadow-2xl shadow-primary/[0.50] ring-2 ring-dark/70 dark:ring-white/70 sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">
                  PCB.
                </span>
              </h2>

              <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
                Saya Mahasiswi aktif di jurusan Teknik Elektro Politeknik Negeri jakarta. Mempunyai
pemahaman mengenai sistem kontrol dan elektronika dasar. Mampu menggunakan beberapa
software elektronika untuk perancangan sistem kontrol dan memiliki kemampuan
mengimplementasikan perancangan rangkaian elektronika ke dalam bentuk fisik serta memiliki
pengalaman dalam perakitan dan pengujian rangkaian elektronika.
               
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:pt-10 lg:text-4xl">
                Mari Berteman
              </h2>

              <p className="mb-6 text-base font-medium text-secondary lg:mt-14 lg:text-lg">
                Saya senang dapat berbagi perjalanan dan pencapaian saya di
                dunia digital dengan Anda. Setiap langkah yang Saya ambil dalam
                mengembangkan proyek-proyek kreatif, menyelesaikan tantangan
                teknis atau memperkuat konektivitas jaringan, Saya rasa adalah
                bagian dari cerita yang lebih besar. Cerita tentang inovasi,
                kerja keras dan semangat untuk terus belajar dan tumbuh.
                <br />
                <br />
                Jangan ragu untuk mengituki Saya di berbagai akun media sosial
                yang ada di bawah ini. Saya sangat berharap dapat terhubung
                dengan Anda dan menjalin persahabatan yang lebih dekat. Terima
                kasih atas kunjungannya, dan mari bersama-sama menginspirasi dan
                memajukan dunia teknologi!
              </p>

              <div className="flex items-center">
                {/* Github */}
                <a
                  href="https://github.com/Gevaalviana05"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    gaEvent({
                      action: 'about_me_clicked',
                      category: 'navigation',
                      label: 'Github',
                    });
  
                    phCapture('about_me_clicked', {
                      label: 'Github',
                      target: 'https://github.com/armandwipangestu',
                      location: 'about_me',
                    });
                  }}
                >
                  <FaGithub className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    GitHub
                  </span>
                </a>

              

                {/* Youtube */}
              

                {/* Instagram */}
                <a
                  href="https://instagram.com/geva_alviana"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    gaEvent({
                      action: 'about_me_clicked',
                      category: 'navigation',
                      label: 'Instagram',
                    });
  
                    phCapture('about_me_clicked', {
                      label: 'Instagram',
                      target: 'https://instagram.com/geva_alviana',
                      location: 'about_me',
                    });
                  }}
                >
                  <FaInstagram className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    Instagram
                  </span>
                </a>

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/geva-alvi"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    gaEvent({
                      action: 'about_me_clicked',
                      category: 'navigation',
                      label: 'LinkedIn',
                    });
  
                    phCapture('about_me_clicked', {
                      label: 'LinkedIn',
                      target: 'https://www.linkedin.com/in/geva-alvi',
                      location: 'about_me',
                    });
                  }}
                >
                  <FaLinkedin className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
