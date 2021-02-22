let mainHabits =
    `
        <div class = "dlh1">
            <nav class="mav-main-dashboard">
                <form action="">
                    <input type="text" placeholder = "nombre del habito" id = "input-name-habito">
                    <label for="tags"> <img src='./resources/vectors/tag.svg' alt="o"> Select Tags :</label>
                    <select name="tags" id="select-tags-habito">
                        <option value="seleccionar">Seleccionar</option>
                        <option value="personal">Personal</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="pasion">Pasion</option>
                    </select>
                    <button type="submit" id="btn-create-habito"> <img src='./resources/vectors/plus-circle.svg' alt="o" type="image/svg"> Create Habito</button>
                </form>
            </nav>
            <div class="container-table">
                <table class="table-habito">
                    <thead>
                        <tr>
                            <th class ="th1">Name</th>
                            <th class ="th2">Type</th>
                            <th class ="th3">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="dashboard-all-habito">
                
                    </tbody>
                </table>
            </div>
        </div>
        <div class = "selected-habito">
            
        </div>
`

export default mainHabits;