import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Gallery.css";
import newOffice1 from "../assets/images/image1.jpeg";
import newOffice2 from "../assets/images/image2.jpeg";
import newOffice3 from "../assets/images/image3.jpeg";
import newOffice4 from "../assets/images/image4.jpeg";
import newOffice5 from "../assets/images/image5.jpeg";
import newOffice6 from "../assets/images/image6.jpeg";
import newOffice7 from "../assets/images/image7.jpeg";
import newOffice8 from "../assets/images/image8.jpeg";
import newOffice9 from "../assets/images/image9.jpeg";
import newOffice10 from "../assets/images/image10.jpeg";
import newOffice11 from "../assets/images/image11.jpeg";
import newOffice12 from "../assets/images/image12.jpeg";
import newOffice13 from "../assets/images/image13.jpeg";
import newOffice14 from "../assets/images/image14.jpeg";
import newOffice15 from "../assets/images/image15.jpeg";
import newOffice16 from "../assets/images/image16.jpeg";
import newOffice17 from "../assets/images/image17.jpeg";
import newOffice18 from "../assets/images/image18.jpeg";
import newOffice19 from "../assets/images/image19.jpeg";
import newOffice20 from "../assets/images/image20.jpeg";
import newOffice21 from "../assets/images/image21.jpeg";
import newOffice22 from "../assets/images/image21.jpeg";
import newOffice23 from "../assets/images/image22.jpeg";
import newOffice24 from "../assets/images/image23.jpeg";
import newOffice25 from "../assets/images/image24.jpeg";
import newOffice26 from "../assets/images/image25.jpeg";
import newOffice27 from "../assets/images/image26.jpeg";
import newOffice28 from "../assets/images/image27.jpeg";
import newOffice29 from "../assets/images/image28.jpeg";
import newOffice30 from "../assets/images/image30.jpeg";
import newOffice31 from "../assets/images/image31.jpeg";
import newOffice32 from "../assets/images/image32.jpeg";
import newOffice33 from "../assets/images/image33.jpeg";
import newOffice34 from "../assets/images/image34.jpeg";
import newOffice35 from "../assets/images/image35.jpeg";
import newOffice36 from "../assets/images/image36.jpeg";
import newOffice37 from "../assets/images/image37.jpeg";
import newOffice38 from "../assets/images/image38.jpeg";
import newOffice39 from "../assets/images/image39.jpeg";
// import newOffice40 from "../assets/images/image40.jpeg";
// import newOffice41 from "../assets/images/image41.jpeg";


const Gallery = () => {
  // State for filter category
  const [filter, setFilter] = useState("all");

  // Refs for scroll animations
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const galleryRef = useRef(null);
  const featuredRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const introControls = useAnimation();
  const galleryControls = useAnimation();
  const featuredControls = useAnimation();
  const ctaControls = useAnimation();

  // InView states
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start("visible");
    if (introInView) introControls.start("visible");
    if (galleryInView) galleryControls.start("visible");
    if (featuredInView) featuredControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [
    headerInView,
    introInView,
    galleryInView,
    featuredInView,
    ctaInView,
    headerControls,
    introControls,
    galleryControls,
    featuredControls,
    ctaControls,
  ]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Gallery data
  const galleryItems = [
    // Construction Projects
    {
      id: 1,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice1,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 2,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice2,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 3,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice3,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 4,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice4,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 5,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice5,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 6,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice6,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 7,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice7,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 8,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice8,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 9,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice9,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 10,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice10,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 11,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice11,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 12,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice12,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 13,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice13,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 14,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice14,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 15,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice15,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },

    // Interior Design Projects
    {
      id: 16,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice16,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 17,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice17,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 18,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice18,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 19,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice19,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 20,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice20,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 21,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice21,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 22,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice22,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 23,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice23,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 24,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice24,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 25,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice25,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
   {
      id: 26,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice26,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 27,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice27,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 28,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice28,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    {
      id: 29,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice29,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 30,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice30,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 31,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice31,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 32,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice32,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 33,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice33,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 34,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice34,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 35,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice35,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 36,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice36,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 37,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice37,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 38,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice38,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
     {
      id: 39,
      title: "Modern Office Complex",
      category: "construction",
      image: newOffice39,
      description: "A state-of-the-art office complex...",
      year: "2023",
      client: "TechCorp International",
      location: "Downtown Metro City",
      featured: true,
    },
    //  {
    //   id: 40,
    //   title: "Modern Office Complex",
    //   category: "construction",
    //   image: newOffice40,
    //   description: "A state-of-the-art office complex...",
    //   year: "2023",
    //   client: "TechCorp International",
    //   location: "Downtown Metro City",
    //   featured: true,
    // },
    
  ];

  // Featured project (video)
  const featuredProject = {
    title: "COBRIXA Headquarters",
    description:
      "Our flagship project showcasing innovative design, sustainable materials, and cutting-edge construction techniques. This building serves as our company headquarters and a demonstration of our capabilities.",
    videoUrl:
      "https://ep-turnerconstruction-prod-asdcetgubtducba3.z01.azurefd.net/uploads/302-turner-web-hero-31825.mp4",
  };

  // Filter gallery items based on selected category
  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <motion.div
        className="page-header"
        ref={headerRef}
        variants={fadeIn}
        initial="hidden"
        animate={headerControls}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Project Gallery
          </motion.h1>
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore our portfolio of exceptional construction projects
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        className="gallery-intro"
        ref={introRef}
        variants={fadeIn}
        initial="hidden"
        animate={introControls}
      >
        <div className="container">
          <motion.p>
            At COBRIXA Construction, we take pride in our diverse portfolio of
            projects spanning residential, commercial, and industrial sectors.
            Each project represents our commitment to quality, innovation, and
            client satisfaction. Browse through our gallery to see examples of
            our craftsmanship and expertise.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Project Section */}
      <motion.section
        className="featured-project"
        ref={featuredRef}
        variants={staggerContainer}
        initial="hidden"
        animate={featuredControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Featured Project</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>

          <div className="featured-content">
            <motion.div
              className="featured-video"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video autoPlay loop muted playsInline>
                <source src={featuredProject.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div className="featured-info" variants={fadeIn}>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View Project Details
                  <motion.i
                    className="fas fa-arrow-right ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.i>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="gallery-section"
        ref={galleryRef}
        variants={staggerContainer}
        initial="hidden"
        animate={galleryControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Projects</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>

          {/* Filter Buttons */}
          <motion.div className="gallery-filter" variants={fadeIn}>
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={filter === "construction" ? "active" : ""}
              onClick={() => setFilter("construction")}
            >
              Construction
            </button>
            <button
              className={filter === "interior-design" ? "active" : ""}
              onClick={() => setFilter("interior-design")}
            >
              Interior Design
            </button>
            <button
              className={filter === "industrial" ? "active" : ""}
              onClick={() => setFilter("industrial")}
            >
              Industrial
            </button>
            <button
              className={filter === "renovation" ? "active" : ""}
              onClick={() => setFilter("renovation")}
            >
              Renovation
            </button>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="gallery-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="gallery-image">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-overlay">
                      <span className="category">{item.category}</span>
                      <Link
                        to={`/projects#project-${item.id}`}
                        className="view-btn"
                      >
                        <i className="fas fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="gallery-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="gallery-cta"
        ref={ctaRef}
        variants={staggerContainer}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Ready to Start Your Project?</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p variants={fadeIn}>
            Contact us today to discuss how COBRIXA Construction can bring your
            vision to life with our expertise and commitment to excellence.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
              <motion.i
                className="fas fa-arrow-right ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Gallery;
