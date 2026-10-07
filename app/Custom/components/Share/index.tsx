import type * as React from 'react'
import { useCallback, useId, useState } from 'react'
import { useLocation, useMatches } from 'react-router'
import {
  TelegramShareButton,
  TelegramIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import { canonicalUrl, site } from '../../../components/seo/site'
import type { SeoHandle } from '../../../components/seo/SeoHeaders'
import { ShareStyled } from './styles'

interface ShareProps {
  compact?: boolean
}

export const Share: React.FC<ShareProps> = ({ compact = false }) => {
  const { pathname } = useLocation()
  const matches = useMatches()
  const current = matches[matches.length - 1]?.handle as SeoHandle | undefined
  const title: string = current?.seo?.title ?? site.name
  const url: string = canonicalUrl(pathname)
  const [expanded, setExpanded] = useState(false)
  const [message, setMessage] = useState('')
  const id = useId()
  const share = useCallback(async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }
      }
    }
    setExpanded(true)
  }, [title, url])
  const copy = useCallback(async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url)
      setMessage('Ссылка скопирована')
    } catch {
      setMessage('Скопируйте ссылку из поля ниже')
    }
  }, [url])

  return (
    <ShareStyled
      aria-label="Поделиться страницей"
      className={compact ? 'share-compact' : 'share-footer'}
    >
      {compact && <p className="share-note">Не держите это в себе.</p>}
      <button
        className="share-primary"
        onClick={share}
        aria-expanded={expanded}
        aria-controls={id}
      >
        <span>{compact ? 'Поделиться ответом' : 'Поделиться страницей'}</span>
        <span className="share-arrow" aria-hidden="true">
          ↗
        </span>
      </button>
      <div className="share-options" id={id} hidden={!expanded}>
        <p className="share-options-caption">Куда передадим?</p>
        <div className="share-buttons">
          <TelegramShareButton
            className="share-network"
            resetButtonStyle={false}
            url={url}
            title={title}
            aria-label="Telegram"
          >
            <TelegramIcon size={24} round />
            <span>Telegram</span>
          </TelegramShareButton>
          <VKShareButton
            className="share-network"
            resetButtonStyle={false}
            url={url}
            title={title}
            aria-label="ВКонтакте"
          >
            <VKIcon size={24} round />
            <span>ВКонтакте</span>
          </VKShareButton>
          <WhatsappShareButton
            className="share-network"
            resetButtonStyle={false}
            url={url}
            title={title}
            aria-label="WhatsApp"
          >
            <WhatsappIcon size={24} round />
            <span>WhatsApp</span>
          </WhatsappShareButton>
          <button className="share-copy" onClick={copy}>
            <span aria-hidden="true">↗</span> Скопировать ссылку
          </button>
        </div>
        <p className="share-status" role="status">
          {message}
        </p>
        {message === 'Скопируйте ссылку из поля ниже' && (
          <input aria-label="Ссылка на страницу" readOnly value={url} />
        )}
      </div>
    </ShareStyled>
  )
}
