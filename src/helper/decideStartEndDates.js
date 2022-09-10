import { format } from 'date-fns';

export function effectiveDateFormarter(effectiveDate) {
  if (!effectiveDate) return ""
  return format(new Date(effectiveDate), "dd-MM-yyyy hh:mm aa")
}

function decideStartEndDates(startDate, endDate, isStartDate = true) {
  if (!startDate || !endDate || startDate === endDate) return "-"

  if (isStartDate) return format(new Date(startDate), "dd-MM-yyyy hh:mm aa")

  const start = new Date(startDate)
  const end = new Date(endDate)
  if (start.getTime() < end.getTime()) return format(end, "dd-MM-yyyy hh:mm aa")

  return "-"
}

export default decideStartEndDates