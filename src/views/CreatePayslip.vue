<template lang="html">
  <div class="payroll-content">
      <div class="row content">
          <h3 class="content-head">From</h3>

          <form class="add-form">
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="department">Department</label>
                  <select class="form-control" required>
                    <option selected>Choose...</option>
                    <option v-for="department in departments"  :key="department.id">{{ department.dept }}</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="department">Employee</label>
                  <select class="form-control">
                    <option selected>Choose...</option>
                    <option v-for="employee in employees"  :key="employee.id">{{ employee.firstname }} {{ employee.lastname }}</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="department">Year</label>
                  <select class="form-control">
                    <option selected>Choose...</option>
                    <option v-for="year in years">{{ year }}</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="department">Months</label>
                  <select class="form-control">
                    <option selected>Choose...</option>
                    <option v-for="month in months">{{ month }}</option>
                  </select>
                </div>
              </div>
             <span class="btn open-form" @click="togglePayForm"><span class="glyphicon glyphicon-import"></span> Click</span>
          </form>
      </div>

      <div class="content" v-if="showSlip">
           <h3 class="content-head">Create Payslip</h3>

          <form class="add-form slip-form">
              <div class="form-group row">
                  <label for="Gross Salary" class="col-sm-2 col-form-label">Gross Salary</label>
                  <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="Amount" v-model="payData.salary">
                  </div>
              </div>

              <div class="form-row row">
                <div class="form-group col-md-2">
                  <label for="pension">Pension</label>
                  <input type="text" class="form-control" placeholder="Enter Pention" v-model="payData.pension">
                </div>
                <div class="form-group col-md-2">
                  <label for="paye">P.A.Y.E</label>
                  <input type="text" class="form-control" placeholder="Enter P.A.Y.E" v-model="payData.paye">
                </div>
                <div class="form-group col-md-2">
                  <label for="nsitf">N.S.I.T.F</label>
                  <input type="text" class="form-control" placeholder="Enter N.S.I.T.F" v-model="payData.nsitf">
                </div>
                <div class="form-group col-md-2">
                  <label for="nhf">N.H.F</label>
                  <input type="text" class="form-control" placeholder="Enter N.H.F" v-model="payData.nhf">
                </div>
                <div class="form-group col-md-2">
                  <label for="ift">I.F.T</label>
                  <input type="text" class="form-control" placeholder="Enter I.F.T" v-model="payData.ift">
                </div>
              </div>

              <div class="form-group row">
                <label for="Total Allowance" class="col-sm-2 col-form-label">Total Allowance</label>
                <div class="col-md-3">
                  <input type="text" class="form-control" placeholder="Amount" v-model="payData.allowance">
                </div>
                <label for="Total Deduction" class="col-sm-2 col-form-label">Other Deduction</label>
                <div class="col-md-3">
                  <input type="text" class="form-control" placeholder="Amount" v-model="payData.otherdeduction">
                </div>
              </div>

              <button type="submit" class="btn btn-success generateslip-btn" @click="generateSlip">Generate Slip</button>
              <p style="color: #F97B00;" >Click on generate slip for summary and net total</p>
          </form>
      </div>
  </div>
</template>

<script>
import employees from '@/data/employees'
import departments from '@/data/departments'
import months from '@/data/months'

export default {
    data() {
        return {
            employees: employees,
            departments: departments,
            months: months,
            years: [],
            payData: {
                salary: '',
                pension: '',
                paye: '',
                nsitf: '',
                nhf: '',
                ift: '',
                allowance: '',
                otherdeduction: '',
            },
            showSlip: false
        }
    },

    mounted() {
        this.generateArrayOfYears()
    },

    methods: {
        togglePayForm () {
            this.showSlip = !this.showSlip
        },

        generateSlip () {
            console.log(this.payData);
        },

        generateArrayOfYears() {
          let max = new Date().getFullYear(), min = max - 9;

          for (var i = max; i >= min; i--) {
            this.years.push(i)
          }
          // return years
        }
    }
}
</script>

<style lang="css" scoped>
.open-form {
    margin-left: 45%;
    width: 100px;
    border: 1px solid #a6a6a6;
}

.generateslip-btn {
    margin-left: 69%;
}
</style>
