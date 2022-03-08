from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__(self, data):
        self.id = data["id"]
        self.dojo_id = data["dojo_id"]

        self.first_name = data["first_name"]
        self.last_name = data["last_name"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def all_ninjas(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query)
        # Parsing data
        allNinjas = []
        for ninja in results:
            allNinjas.append(cls(ninja))
        return allNinjas

    @classmethod
    def create_ninja(cls,data):
        query = "INSERT INTO ninjas (first_name,last_name,age,dojo_id) VALUES (%(ninja_fname)s,%(ninja_lname)s,%(age)s,%(dojo_id)s)"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query,data)
        return results


