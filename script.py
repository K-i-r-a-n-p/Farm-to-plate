from pymongo import MongoClient

def verify_data():
    try:
        client = MongoClient("mongodb://admin:password@localhost:27018/")
        db = client['test']
        employees = db['employee']
        
        # Count and display records
        count = employees.count_documents({})
        print(f"Found {count} records in the employee collection:")
        
        for employee in employees.find():
            print(employee)
        
        print("Verification successful!")
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")

if __name__ == "__main__":
    verify_data()
