<template lang="html">
    <div class="add-new">
        <div class="row content">
            <h3 class="content-head">Create Department</h3>

            <form class="add-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="department">New Department</label>
                  <input type="text" class="form-control" placeholder="Department" v-model="departmentData">
                </div>
              </div>

              <button type="submit" class="btn btn-primary dept-add-btn">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            departmentData: ''
        }
    }
}
</script>

<style lang="css" scoped>
.dept-add-btn {
    margin-left: 47%;
}
</style>
