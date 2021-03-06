import React from 'react'
import Column from '../Column'
import CTA from '../CTA'
import Image from '../Image'
import Only from '../Only'
import Row from '../Row'
import './index.css'

export default React.memo(function Banner(props) {
  return (
    <div
      className={`Banner ${props.className || ''}`}
      style={{
        '--color': `var(--${props.faction}, rgba(222, 215, 164, 0.5))`,
      }}
    >
      <div className='Banner__inner'>
        <Row desktopOnly wideGutter>
          <Column width='2/3'>
            <h2 className='Banner__title'>{props.title}</h2>
            <p className='Banner__subline'>{props.subline}</p>
            <p className='Banner__copy'>{props.copy}</p>
            <CTA className='Banner__CTA' {...props.cta} />
          </Column>
          <Only.Desktop>
            <Column width='1/3'>
              <div>
                <Image src={props.image} />
              </div>
            </Column>
          </Only.Desktop>
        </Row>
      </div>
    </div>
  )
})
