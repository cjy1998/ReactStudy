import { useLayoutEffect, useState } from "react";
// import { type CalendarProps } from "@/types/customComponent";

const Calendar = ({ defaultDate, onChange }: CalendarProps) => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  /**
   * 获取当前月份的天数
   * @param year 年
   * @param month 月
   * @returns 天数
   */
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  /**
   * 获取当前月份的第一天
   * @param year 年
   * @param month 月
   * @returns 周几
   */
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  /**
   * 渲染日期
   */
  const renderDates = () => {
    const days = [];
    const daysCount = daysOfMonth(nowDate.getFullYear(), nowDate.getMonth());
    const firstDay = firstDayOfMonth(nowDate.getFullYear(), nowDate.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      if (i === nowDate?.getDate()) {
        days.push(
          <div
            key={i}
            onClick={() => clickDate(i)}
            className="day cursor-pointer bg-blue-400 rounded-full"
          >
            {i}
          </div>
        );
      } else {
        days.push(
          <div
            key={i}
            onClick={() => clickDate(i)}
            className="day cursor-pointer hover:bg-slate-200 rounded-full"
          >
            {i}
          </div>
        );
      }
    }

    return days;
  };

  /**
   * 切换上一个月
   */
  const handlePrevMonth = async () => {
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, 1));
    onChange?.(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, 1));
  };
  /**
   * 切换下一个月
   */
  const handleNextMonth = () => {
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1));
    onChange?.(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1));
  };
  /**
   * 点击日期
   */
  const clickDate = (day: number) => {
    const curDate = new Date(nowDate?.getFullYear(), nowDate?.getMonth(), day);
    setNowDate(curDate);
    onChange?.(curDate);
  };

  useLayoutEffect(() => {
    if (defaultDate) {
      setNowDate(defaultDate);
    } else {
      setNowDate(new Date());
    }
  }, [defaultDate]);
  return (
    <div className="hover:shadow-md p-5">
      <div className="head flex justify-between items-center">
        <button
          onClick={handlePrevMonth}
          className="w-10 h-10 rounded-md bg-slate-200 cursor-pointer"
        >
          &lt;
        </button>
        <div>
          {nowDate?.getFullYear()}年{nowDate?.getMonth() + 1}月
        </div>
        <button
          onClick={handleNextMonth}
          className="w-10 h-10 rounded-md bg-slate-200 cursor-pointer"
        >
          &gt;
        </button>
      </div>
      <div className="days grid grid-cols-7 gap-1 mt-2 text-center leading-8">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  );
};

export default Calendar;
