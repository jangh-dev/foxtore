import React from 'react';
import '../scss/Button.scss';
import classNames from 'classnames';

// 사이즈 설정 size: large, medium, small
// 색상 설정 blue, pink, gray
// rest 지정된 파라미터 이외에 모든것
function Button({ children, size, color, outline, fullWidth, className, ...rest }) {
    return <button className={classNames('Button', size, color, { outline, fullWidth }, className)}{...rest}>
        {children}
    </button>;
};

// 버튼 기본 설정
Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

export default Button;
