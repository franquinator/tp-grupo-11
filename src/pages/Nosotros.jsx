/* eslint-disable no-unused-vars */
import React from "react";
import { Heart, Users, Leaf, Award } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Nosotros.module.css";
import ImageWithFallback from "../components/ImageWithFallback";

import valuesData from "../../data/values.json";
import teamData from "../../data/team.json";

const icons = {
  Heart: Heart,
  Users: Users,
  Leaf: Leaf,
  Award: Award,
};

export default function Nosotros() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.section}
      >
        <h1 className={styles.title}>Nuestra Historia</h1>
        <p className={styles.subtitle}>
          Luna & Granos Café nació en 2018 del sueño de crear un espacio donde
          el aroma del café recién tostado se mezcle con conversaciones cálidas
          y momentos memorables.
        </p>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672692651977-30f0700d3d1c"
          alt="Nuestro espacio de tostado"
          className={styles.heroImage}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.section}
      >
        <h2 className={styles.title}>Nuestros Valores</h2>
        <div className={`${styles.grid} ${styles.grid4}`}>
          {valuesData.map((value, index) => {
            const Icon = icons[value.icon]; 
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={styles.card}
              >
                <div className={styles.cardIcon}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Nuestra Misión</h2>
              <p className="text-muted-foreground mb-6">
                En Luna & Granos Café, nuestra misión es ofrecer una experiencia café excepcional que vaya más allá 
                de una simple bebida. Queremos ser el lugar donde cada visita se convierta en un momento especial, 
                donde el sabor auténtico del café se combine con un servicio cálido y personalizado.
              </p>
              <p className="text-muted-foreground">
                Trabajamos incansablemente para apoyar a los productores de café locales, promoviendo prácticas 
                sostenibles y el desarrollo de comunidades cafeteras. Cada taza que servimos cuenta la historia 
                de granos cuidadosamente seleccionados y tostados con maestría.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1662556828474-aaad95b81fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc1ODc0OTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Granos de café sostenibles"
                className={styles.heroImage}
              />
            </div>
          </div>
        </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={styles.section}
      >
        <h2 className={styles.title}>Nuestro Equipo</h2>
        <div className={styles.grid}>
          {teamData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={styles.card}
            >
              <h3>{member.name}</h3>
              <p>
                <strong>{member.role}</strong>
              </p>
              <p>{member.description}</p>
              <img src={member.imagen} alt={`Foto de ${member.name}`}
                className={styles.cardImage} />
            </motion.div>
          ))}
        </div>
          <h2 className={styles.title}>El equipo hace posible que cada taza sea perfecta</h2>
          <ImageWithFallback
          src="https://images.unsplash.com/photo-1641570211014-eaa563918978"
          alt="Nuestro equipo de trabajo"
          className={styles.teamPhoto}
        />        
      </motion.div>
    </div>
  );
}