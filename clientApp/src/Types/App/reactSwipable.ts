declare module 'react-swipeable-views-react-18-fix' {
    import * as React from 'react';
    import {
        AxisType,
        OnChangeIndexCallback,
        OnSwitchingCallback,
        OnTransitionEndCallback,
        SpringConfig,
    } from 'react-swipeable-views';

    export interface SwipeableViewsProps
        extends Omit<React.HTMLProps<HTMLDivElement>, 'action'> {
        animateHeight?: boolean | undefined;
        animateTransitions?: boolean | undefined;
        axis?: AxisType | undefined;
        containerStyle?: React.CSSProperties | undefined;
        disabled?: boolean | undefined;
        disableLazyLoading?: boolean | undefined;
        enableMouseEvents?: boolean | undefined;
        hysteresis?: number | undefined;
        ignoreNativeScroll?: boolean | undefined;
        index?: number | undefined;
        onChangeIndex?: OnChangeIndexCallback | undefined;
        onSwitching?: OnSwitchingCallback | undefined;
        onTransitionEnd?: OnTransitionEndCallback | undefined;
        resistance?: boolean | undefined;
        style?: React.CSSProperties | undefined;
        slideStyle?: React.CSSProperties | undefined;
        springConfig?: SpringConfig | undefined;
        slideClassName?: string | undefined;
        threshold?: number | undefined;
        action?: any;
    }

    export interface SwipeableViewsState {
        indexCurrent?: number | undefined;
        indexLatest?: number | undefined;
        isDragging?: boolean | undefined;
        isFirstRender?: boolean | undefined;
        heightLatest?: number | undefined;
        displaySameSlide?: boolean | undefined;
    }


}