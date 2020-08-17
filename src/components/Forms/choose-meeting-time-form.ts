import styled, { css } from 'styled-components'

import { mediaQueries } from '@/assets/themes/media'

export const ChooseMeetingTimeForm = styled.div``

export const ChooseWeek = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;

  svg {
    cursor: pointer;
  }

  > div {
    text-align: center;
  }
`

export const TimeRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const DayOfAWeek = styled.div`
  width: 60px;
  margin: 2px;

  ${mediaQueries.isTabletOrDesktop} {
    width: 70px;
  }
`

type TimeCellProps = {
  available: boolean
}

export const TimeCell = styled.div<TimeCellProps>`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 60px;
  margin: 2px;
  border-radius: 6px;
  ${props =>
    props.available
      ? css`
          color: #fff;
          background-color: #60a917;
          cursor: pointer;
        `
      : css`
          color: #000;
          background-color: #f5f5f5;
        `}
  text-align: center;

  ${mediaQueries.isTabletOrDesktop} {
    width: 70px;
  }
`
