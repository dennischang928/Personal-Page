import styles from "./Project_Card.module.css"
const Project_Card = ({ id, title, content, thumbnail, tags }) => {
    return (
        <div className={styles.container}>
            <img src={thumbnail} />
        </div>
    )
}

export default Project_Card