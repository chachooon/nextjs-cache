import { css } from '@emotion/react';

const ResetCSS = css`
  html,
  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }
  html,
  body,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  input,
  select,
  table,
  textarea {
    font-family: Spoqa Han Sans Neo, -apple-system, system-ui, HelveticaNeue, AppleSDGothicNeo, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    position: relative;
    background-color: #f6f6f6;
    color: #000;
    word-break: break-all;
    -webkit-text-size-adjust: none;
    letter-spacing: -0.02em;
    padding-top: constant(safe-area-inset-top); /* ≤IOS 11.0 */
    padding-top: env(safe-area-inset-top); /* >iOS 11.0 */
    padding-bottom: constant(safe-area-inset-bottom); /* ≤IOS 11.0 */
    padding-bottom: env(safe-area-inset-bottom); /* >iOS 11.0 */
  }

  table {
    border-collapse: collapse;
  }

  fieldset,
  img {
    border: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  address,
  em {
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }

  img,
  svg {
    vertical-align: top;
  }

  mark {
    color: inherit;
    font-weight: 700;
    background: 0 0;
  }

  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    background: 0 0;
  }

  .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  .blind:before {
    display: block;
    width: 0;
    height: 0;
    content: '\\00a0';
    font-size: 0;
  }
  * {
    box-sizing: border-box;
  }

  *:after,
  *:before {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
  .list_cont {
        padding: 0 20px;
      }
      .list_cont .list_tit {
        display: block;
        margin: 32px 0 12px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
      }
      .list_cont .list_dot li {
        position: relative;
        padding-left: 6px;
        font-size: 15px;
        color: #666;
      }
      .list_cont .list_dot li + li {
        margin-top: 8px;
      }
      .list_cont .list_dot li:after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: #666;
      }
      .font_b {
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        color: #666;
      }
      .font_sm {
        display: block;
        font-size: 12px;
        color: #666;
      }
      .tb_list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 190px;
        margin: 10px 0;
      }
      .tb_list li {
        width: 60px;
      }
      .tb_list li:nth-of-type(1n + 4) {
        margin-top: 10px;
      }
      .tb_list.check_type .area_check {
        margin-bottom: 0;
      }
      .tb_list.check_type li {
        width: initial;
      }
      .tb_list.check_type li:nth-of-type(3n + 2) {
        margin-left: 10px;
        margin-right: 10px;
      }
      .tb_list.check_type li .check_label_depth {
        padding-left: 28px;
      }
      .rowdata_box {
        position: relative;
      }
      .rowdata_box .area_check {
        display: inline-block;
        margin-bottom: 12px;
      }
      .rowdata_box .acco_tit,
      .rowdata_box .acco_item {
        font-size: 12px;
        color: #666;
      }
      .rowdata_box .acco_tit ~ .acco_tit {
        margin-top: 8px;
      }
      .rowdata_box .acco_item {
        display: none;
      }
      .rowdata_box .tip {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 10px;
        height: 22px;
        line-height: 23px;
        font-size: 12px;
        font-weight: 500;
        border-radius: 11px;
        color: #fff;
      }
      .rowdata_box .tip.bg_sky {
        background-color: #4ea4cd;
      }
      .rowdata_box .tip.bg_grn {
        background-color: #6cb555;
      }
      .rowdata_box .tip.bg_ylw {
        background-color: #edc849;
      }
      .rowdata_box .tip.bg_org {
        background-color: #e68a43;
      }
      .rowdata_box .tip.bg_red {
        background-color: #d64234;
      }
      .full_cont {
        padding: 0 20px 30px;
      }
      .full_cont .point_thirdparty {
        padding: 0;
      }
      .full_cont .title_s {
        font-size: 15px;
        font-weight: bold;
        line-height: 23px;
        color: #333;
      }
      .full_cont .title_s.mt50 {
        margin-top: 50px;
      }
      .full_cont .step_box {
        margin: 20px 0;
      }
      .full_cont .step_box .step_list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .full_cont .step_box .step_list li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
      .full_cont .step_box .step_list li .step_tit {
        display: block;
        margin-bottom: 8px;
        text-align: center;
        font-size: 12px;
        line-height: 14px;
        color: #666;
      }
      .full_cont .step_box .step_list li:after {
        display: block;
        content: '';
        width: 100%;
        height: 12px;
      }
      .full_cont .step_box .step_list li:nth-of-type(1):after {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        background-color: #4ea4cd;
      }
      .full_cont .step_box .step_list li:nth-of-type(2):after {
        background-color: #6cb555;
      }
      .full_cont .step_box .step_list li:nth-of-type(3):after {
        background-color: #edc849;
      }
      .full_cont .step_box .step_list li:nth-of-type(4):after {
        background-color: #e68a43;
      }
      .full_cont .step_box .step_list li:nth-of-type(5):after {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        background-color: #d64234;
      }
      .gift_box {
        margin: 24px 0 72px;
        text-align: center;
      }
      .gift_box img {
        display: inline-block;
        width: 240px;
        height: 142px;
      }

      .home {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .search-message {
        margin-top: 16px;
        font-size: 17px;
        font-weight: 700;
      }

      .pokemon-card {
        border: 4px solid white;
        border-radius: 16px;
        display: flex;
        padding: 8px;
        text-align: center;
        background-color: #e0d494;
        font-weight: 800;
        color: #4f2424;
        text-transform: capitalize;
        align-items: center;
      }

      .search-grid {
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 300px;
        grid-gap: 8px;
      }

      .pokemon-card-large {
        border: 4px solid white;
        border-radius: 1rem;
        text-align: center;
        box-sizing: border-box;
        margin: 0.5rem;
        background-color: #e0d494;
        font-weight: 800;
        color: #4f2424;
      }

      .card-section {
        border: 2px solid white;
        text-align: left;
        display: grid;
        grid-template-columns: 1fr 2fr;
        background-color: #f0eee6;
        text-transform: capitalize;
        align-items: center;
      }

      .card-section:first-of-type {
        margin-top: 24px;
      }

      .card-section:last-child {
        border-bottom-right-radius: 0.7rem;
        border-bottom-left-radius: 0.7rem;
      }

      .card-section-title {
        color: black;
        font-display: block;
        font-weight: 900;
        font-size: 14px;
        margin-left: 16px;
        text-transform: uppercase;
        justify-content: flex-start;
      }

      .pokemon-card-large h2 {
        font-size: 24px;
        text-align: center;
        display: block;
        text-transform: capitalize;
        font-weight: 700;
      }

      .container {
        margin: 64px auto;
        max-width: 300px;
      }

      .card-section-content {
        padding-left: 40px;
      }

      .center {
        position: absolute;
        text-align: center;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 200px;
        height: 20px;
        font-weight: 900;
        font-size: 16px;
        margin: auto;
      }
`;

export default ResetCSS;
