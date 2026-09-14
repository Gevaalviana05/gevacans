import Metadata from "@/components/utilities/metadata";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiHtml5,
  SiMarkdown,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiGnubash,
  SiApache,
  SiProxmox,
  SiMikrotik,
  SiUbiquiti,
  SiFigma,
  SiPostman,
  SiArduino,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiCpanel,
  SiFirebase,
  SiMongodb,
  SiGithubactions,
  SiJenkins,
  SiMinio,
  SiCeph,
  SiApachehadoop,
  SiTrino,
  SiApachehive,
  SiApacheparquet,
  SiApachenifi,
  SiGrafana,
  SiPrometheus,
  SiThanos,
  SiVmware,
  SiTypescript,
  SiJsonwebtokens,
  SiCisco,
  SiTerraform,
  SiNotion,
  SiTrello,
  SiGooglecolab,
  SiJupyter,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs, DiNginx } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import Image from "next/image";
import { trackSkillHover } from "@/utilities/analytics";

const SkillsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const grayscales = document.querySelectorAll(".grayscale");
    const iconSkills = document.querySelectorAll(".icon-skill");

    const animateGrayscale = () => {
      if (activeIndex < grayscales.length) {
        grayscales[activeIndex].classList.remove("grayscale", "opacity-60");
        grayscales[activeIndex].classList.add(
          "grayscale-0",
          "opacity-100",
          "scale-110"
        );

        iconSkills[activeIndex].classList.remove("scale-0");
        iconSkills[activeIndex].classList.add("scale-110");

        setTimeout(() => {
          grayscales[activeIndex].classList.remove(
            "grayscale-0",
            "opacity-100",
            "scale-110"
          );

          iconSkills[activeIndex].classList.remove("scale-110");

          grayscales[activeIndex].classList.add("grayscale", "opacity-60");
          iconSkills[activeIndex].classList.add("scale-0");
          setActiveIndex(activeIndex + 1);
        }, 500);
      } else {
        setActiveIndex(0);
      }
    };

    animateGrayscale();
  }, [activeIndex]);

  return (
    <>
      
      <section id="skills" className="pt-36 pb-36 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-2xl font-semibold uppercase text-primary">
  Skills
</h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Penguasaan Teknik Elektro dan Sistem Elektronika
              </h2>
              <p className="text-medium font-medium text-secondary md:text-lg mt-10">
                Memiliki ketertarikan dan pengalaman dalam bidang Teknik Elektro, khususnya
  elektronika, sistem kontrol, perancangan PCB, serta instalasi dan maintenance
  perangkat. Saya terbiasa melakukan perakitan, konfigurasi, pengujian, dan
  troubleshooting pada berbagai perangkat elektronik dan sistem teknologi.
  Dengan menggabungkan kemampuan teknis, kreativitas, dan kemampuan pemecahan
  masalah, saya berusaha menghasilkan solusi yang efektif dan dapat diterapkan
  dalam kebutuhan industri. <br />
                
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
