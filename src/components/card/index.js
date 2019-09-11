import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.less';

class Index extends React.Component {
  static propTypes = {
    title: PropTypes.string, // 中标题
    data: PropTypes.array, // 数据列表
    status: PropTypes.string.isRequired, // 状态
    statusText: PropTypes.string, // 状态文字
    descriptionBefore: PropTypes.string, //短描述 在此之前
    descriptionAfter: PropTypes.string, //短描述 在此之后
    onClick: PropTypes.func, //短描述 在此之后
  };

  static defaultProps = {
    status: 'normal',
    data: [],
  };

  render() {
    const {
      title,
      data,
      status,
      statusText,
      descriptionBefore,
      descriptionAfter,
      onClick,
    } = this.props;
    return (
      <div className={styles.wrap}>
        {descriptionBefore && (
          <div className={styles.description}>{descriptionBefore}</div>
        )}
        <div
          className={classNames(styles.content, styles[`${status}Content`])}
          onClick={e => {
            if (onClick) {
              e.stopPropagation();
              e.preventDefault();
              onClick();
            }
          }}
        >
          <div className={styles.top}>
            {title && <div className={styles.title}>{title}</div>}
            {status && statusText && (
              <div
                className={classNames(
                  styles.statusText,
                  styles[`${status}StatusText`]
                )}
              >
                {statusText}
              </div>
            )}
          </div>
          <div className={styles.bottom}>
            {data &&
              data.map((v, i) => {
                return (
                  <div className={styles.item} key={i.toString()}>
                    {v.icon && <div className={styles.icon}>{v.icon}</div>}
                    {v.text && <div className={styles.text}>{v.text}</div>}
                  </div>
                );
              })}
          </div>
        </div>
        {descriptionAfter && (
          <div className={styles.description}>{descriptionAfter}</div>
        )}
      </div>
    );
  }
}

export default Index;
