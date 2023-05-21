import { useEffect } from 'react'
import tocbot from 'tocbot'
import styles from './toc.module.css'

export default function Toc() {
  const addIdsToTitle = () => {
    const entryContainer = document.querySelector('.content')
    if (!entryContainer) {
      return
    }
    const headings = entryContainer.querySelectorAll('h2, h3');

    [].forEach.call(headings, (heading) => {
      const id = heading.textContent
      if (!heading.getAttribute('id')) {
        heading.setAttribute('id', id)
      }
    })
  }

  const isHeadingsExists = () => {
    const entryContainer = document.querySelector('.content')
    if (!entryContainer) {
      return
    }
    const headings = entryContainer.querySelectorAll('h2, h3')
    if (headings.length === 0) {
      return false
    }
    return true
  }

  useEffect(() => {
    addIdsToTitle()
    const item = document.querySelector('.js-toc')
    if (!item) {
      return
    }
    if (!isHeadingsExists()) {
      return
    }
    item.style.display = 'block'
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.content',
      headingSelector: 'h2, h3',
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <div className={styles.tocbox}>
      <div className="js-toc"></div>
    </div>
  )
}