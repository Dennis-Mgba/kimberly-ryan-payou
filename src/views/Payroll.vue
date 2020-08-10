<template lang="html">
    <div class="employee-content">
        <div class="row content">
            <h3 class="content-head">Payroll</h3>

            <table>
              <thead>
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                </tr>
              </thead>
              <tbody v-for="payslip in payslips"  :key="payslip.id">
                <tr>
                    <td scope="row" data-label="S/N">{{ payslip.id }}</td>
                    <td data-label="Employee Name">{{ payslip.employeename }}</td>
                    <td data-label="Amount"># {{ payslip.amount }}</td>
                    <td data-label="Status">{{ payslip.status }}</td>
                    <td class="table-btns">
                        <button type="button" class="btn btn-primary payslip-btn"> <span class="glyphicon glyphicon-download-alt"></span> Download payslip</button>
                    </td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import payslips from '@/data/payslips'

export default {
    data() {
        return {
            payslips: payslips
        }
    }
}
</script>

<style lang="css" scoped>
.payslip-btn {
    width: auto;
    padding: 3.5px 10px 10px 10px;
}
</style>
