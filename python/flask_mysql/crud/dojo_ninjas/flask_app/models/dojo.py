from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import ninja

class Dojo:
    def __init__(self, data):
        self.id = data["id"]

        self.name = data["name"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.ninjas = []

    @classmethod
    def all_dojo(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query)
        #parsing
        allDojo = []
        for dojo in results:
            allDojo.append(cls(dojo))
        return allDojo

    @classmethod
    def addDojo(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(dojo_name)s)"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query,data)
        return results

    @classmethod
    def show_dojo_ninjas(cls,data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query,data)
        # all_dojo_ninjas = []
        dojo = cls(results[0])
        for row in results:
            # one_ninja = cls(row)
            # 2 - collect the data for the secondary instance
            ninja_data = {
                "id" : row["id"],
                "dojo_id" : row["dojo_id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "created_at" : row["created_at"],
                "updated_at" : row["updated_at"]
            }
            # 3 - create instance of secondary class and attach it to the primary
            # -- create instance of Friend and attach it to the one_pet
            # one_pet.owner = friend.Ninja(_data)
            dojo.ninjas.append(ninja.Ninja(ninja_data))
            # 4 - add complete Pet instance with Friend/owner to the list of pets w/ owners
            # all_pets_w_owners.append(one_pet)
        # 5 - return full list
        return dojo