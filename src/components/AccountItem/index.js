import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/94e1267b55fd9631f367cdc8bc167996~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=2894bdb7&x-expires=1743984000&x-signature=Zdc%2BbdQL2mUTeVmc9KuVERpZkK8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=f20df69d&idc=my"
        alt="Mie"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
