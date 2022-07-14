import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

import styles from "./Project_Card.module.css"

const Project_Card = ({ id, title, content, thumbnail, tags }) => {
    const [IsFlipped, setIsFlipped] = useState(false)

    const { transform, opacity } = useSpring({
        opacity: IsFlipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${IsFlipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <div className={styles.container} onClick={() => setIsFlipped(!IsFlipped)}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.ImageSection}>
                <a.img className={styles.thumbnail} id="thumbnail" src={thumbnail}
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                />

                <a.div
                    className={styles.content_container}
                    style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                    }}
                >
                    <div className={styles.content}>
                        {content}
                    </div>
                </a.div>
            </div>


        </div>
    )
}

export default Project_Card