import styles from './styles.module.css'

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center p-24">
      <div className={styles.loading}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}