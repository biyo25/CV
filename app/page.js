import styles from '../styles/CV.module.css';

export default function CV() {
  const projects = [
    {
      title: 'SISFO SARPRAS',
      desc: 'I once created a Sisfo Sarpras website that can make it easier for you to borrow various electronic goods and you can fill in the borrowing and return data on this website.',
      img: '/Sisfo-sarpras.jpg',
      link: 'https://www.figma.com/design/AFMSTgprDEOkBw6AQVYVN/Untitled?node-id=0-1&p=f&t=BNUaQr3U41RFzKEA-0'
    },
    {
      title: 'IOT',
      desc: 'IOT is a mobile app that can activate electronic goods remotely, such as 3 to 9, you just scan the barcode on the electronic goods and the app is ready to use.',
      img: '/IOT.jpg',
      link: 'https://www.figma.com/design/KmdYR13s6Y73RwANHD2y9Z/Untitled?node-id=0-1&p=f&t=N8XAovvIclqrUiIZ-0'
    },
    {
      title: 'MamaCooking',
      desc: 'MamaCooking is a website for people who want to find a wide variety of food recipes, with a minimalist design that allows people to use it easily.',
      img: '/Mamacooking.jpg',
      link: 'https://www.figma.com/design/sZMMeKHbQdKCkqC0lAD3UM/Untitled?node-id=0-1&p=f&t=8qQ12Ve8jioahSh9-0'
    },
    {
      title: 'Login/Loading Screen',
      desc: 'I made a loading screen with the game character I play and I made it accidentally, just to show my design skills without any reference or copying other people.',
      img: '/Login-screen-page.jpg',
      link: 'https://www.figma.com/design/R2jbkq2ZLqDjaCRhJgNE/Untitled?node-id=0-1&p=f&t=KsejPw5ndXzYEks-0'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <img src="/Image.jpg" alt="Image" className={styles.profile} />
        <h2 className={styles.name}>Biyo Dwi Apriansyah</h2>
        <p className={styles.role}>UI/UX Designer</p>

        <div className={styles.section}>
          <h3>Contact</h3>
          <p>📞 +62 898 5479 949</p>
          <p>📧 BiyoDwi@gmail.com</p>
          <p>📍 Depok, Pekapuran, Sukatani</p>
        </div>

        <div className={styles.section}>
          <h3>Education</h3>
          <p><strong>(2023 - 2025)</strong><br />SMK Taruna Bhakti</p>
        </div>

        <div className={styles.section}>
          <h3>Hard Skills</h3>
          <ul>
            <li>Typography</li>
            <li>Figma</li>
            <li>Digital marketing</li>
            <li>Time management</li>
            <li>Color theory</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Soft Skills</h3>
          <ul>
            <li>Public Speaking</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <section className={styles.section}>
          <h3>About Me</h3>
          <p>
            I'm a twelfth-grade student at Taruna Bhakti Vocational School, majoring in RPL.
            I'm very interested in new things, easy to talk to, responsible, and able to work
            collaboratively with others. I can apply my knowledge and experience in my daily
            life, and I also have the desire and ability to learn and develop myself.
          </p>

        </section>
        


        {/* Portfolio Projects */}
        <section className={styles.section}>
          <h3>Portfolio Projects</h3>
          {projects.map((project, idx) => (
            <div className={styles.card} key={idx}>
              <img src={project.img} alt={project.title} className={styles.image} />
              <div className={styles.content}>
                <h4 className={styles.title}>{project.title}</h4>
                <p className={styles.desc}>{project.desc}</p>
                <a
                  href={project.link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
