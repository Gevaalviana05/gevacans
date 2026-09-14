import Metadata from "@/components/utilities/metadata";

const EducationPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Pendidikan"
        description="Berikut adalah pendidikan yang saya tempuh"
        image="/metadata/home.png"
        url="pendidikan"
      />

      <section
        id="pendidikan"
        className="pb-40 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-S">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-2xl font-semibold uppercase text-primary">
  Pendidikan
</h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white">
                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      September 2024 - Sekarang
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Politeknik Negeri Jakarta
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      D3 Teknik Elektro
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari dasar-dasar teknik elektro, sistem kontrol, dan kelistrikan.  
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mengembangkan kemampuan dalam merancang, menganalisis, dan menguji rangkaian elektronika.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Menggunakan software pendukung untuk perancangan dan simulasi rangkaian elektronika.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mengerjakan berbagai proyek individu maupun kelompok untuk meningkatkan kemampuan pemecahan masalah dan kerja sama tim.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Melakukan kegiatan praktikum untuk menerapkan teori yang telah dipelajari ke dalam praktik secara langsung.
                      </p>
                    </div>

                    
                  </div>
                </li>

                

                {/* Second Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2021 - 2024
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      SMAN 53 JAKARTA
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      IPA
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari ilmu pengetahuan alam seperti Matematika, Fisika, Kimia dan Biologi dengan 
                        mengembangkan kemampuan berpikir logis, analitis dan pemecahan masalah
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mengikuti praktikum dan kerja kelompok yang melatih tanggung jawab
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationPage;
