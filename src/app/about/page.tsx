import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="bg-background w-full min-h-[91.5vh] h-full  flex flex-col items-center justify-start ">
        {/* <CursorWrapper /> */}
        <div className="h-48 w-full bg-accent text-accent-foreground text-5xl font-normal flex justify-center items-center">
          <div className="mb-10 xl:mb-0">About Me!</div>
          </div>
        <div className="p-2 border-2 border-accent m-2 rounded-md absolute top-36 xl:top-20 xl:left-20">
          <Image
            alt="Profile Image"
            src="/images/me.jpg"
            width={200}
            height={400}
            loading="lazy"
            className=" rounded-md  "
          />
          <div className="font-light mt-2 text-accent text-4xl text-center">AMIT KARN</div>
        </div>
  
        <div className=" border border-accent mx-4 xl:mx-4 xl:mr-8 p-4 xl:p-4 absolute top-[500px] xl:top-[260px] xl:left-[320px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam magni
          ex, vitae optio pariatur adipisci aliquid harum ea quae! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Asperiores ut libero sint
          temporibus eligendi tenetur ad tempora iusto officiis ullam saepe
          soluta, voluptatem ea nihil quibusdam nulla obcaecati? Quibusdam nisi,
          blanditiis doloremque aperiam laborum laboriosam illum cupiditate
          accusamus temporibus reprehenderit suscipit incidunt labore, commodi
          quos optio iusto odio impedit eligendi facere facilis quam quas at
          molestias excepturi! Rem eius sit culpa praesentium itaque veritatis
          labore inventore porro ad, maiores, illo nam quidem eum ut officia
          error, laudantium dolor rerum quae obcaecati! Doloremque aliquam
          praesentium exercitationem maiores deserunt ut. Officia quae officiis
          distinctio possimus nisi et quia culpa totam quasi recusandae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam magni
          ex, vitae optio pariatur adipisci aliquid harum ea quae! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Asperiores ut libero sint
          temporibus eligendi tenetur ad tempora iusto officiis ullam saepe
          soluta, voluptatem ea nihil quibusdam nulla obcaecati? Quibusdam nisi,
          blanditiis doloremque aperiam laborum laboriosam illum cupiditate
          accusamus temporibus reprehenderit suscipit incidunt labore, commodi
          quos optio iusto odio impedit eligendi facere facilis quam quas at
          molestias excepturi! Rem eius sit culpa praesentium itaque veritatis
          labore inventore porro ad, maiores, illo nam quidem eum ut officia
          error, laudantium dolor rerum quae obcaecati! Doloremque aliquam
          praesentium exercitationem maiores deserunt ut. Officia quae officiis
          distinctio possimus nisi et quia culpa totam quasi recusandae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam magni
          ex, vitae optio pariatur adipisci aliquid harum ea quae! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Asperiores ut libero sint
          temporibus eligendi tenetur ad tempora iusto officiis ullam saepe
          soluta, voluptatem ea nihil quibusdam nulla obcaecati? Quibusdam nisi,
          blanditiis doloremque aperiam laborum laboriosam illum cupiditate
          accusamus temporibus reprehenderit suscipit incidunt labore, commodi
          quos optio iusto odio impedit eligendi facere facilis quam quas at
          molestias excepturi! Rem eius sit culpa praesentium itaque veritatis
          labore inventore porro ad, maiores, illo nam quidem eum ut officia
          error, laudantium dolor rerum quae obcaecati! Doloremque aliquam
          praesentium exercitationem maiores deserunt ut. Officia quae officiis
          distinctio possimus nisi et quia culpa totam quasi recusandae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam magni
          ex, vitae optio pariatur adipisci aliquid harum ea quae! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Asperiores ut libero sint
          temporibus eligendi tenetur ad tempora iusto officiis ullam saepe
          soluta, voluptatem ea nihil quibusdam nulla obcaecati? Quibusdam nisi,
          blanditiis doloremque aperiam laborum laboriosam illum cupiditate
          accusamus temporibus reprehenderit suscipit incidunt labore, commodi
          quos optio iusto odio impedit eligendi facere facilis quam quas at
          molestias excepturi! Rem eius sit culpa praesentium itaque veritatis
          labore inventore porro ad, maiores, illo nam quidem eum ut officia
          error, laudantium dolor rerum quae obcaecati! Doloremque aliquam
          praesentium exercitationem maiores deserunt ut. Officia quae officiis
          distinctio possimus nisi et quia culpa totam quasi recusandae!
        </div>
      </div>
    );
};

export default AboutPage;