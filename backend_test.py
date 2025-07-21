#!/usr/bin/env python3
"""
Backend API Testing Script for Mira Website
Tests all backend endpoints to ensure proper functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

def test_backend_apis():
    """Test all backend API endpoints"""
    
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ CRITICAL: Could not get backend URL from frontend/.env")
        return False
    
    api_base = f"{backend_url}/api"
    print(f"🔍 Testing Backend APIs at: {api_base}")
    print("=" * 60)
    
    all_tests_passed = True
    
    # Test 1: Root endpoint
    print("1. Testing Root Endpoint (GET /api/)")
    try:
        response = requests.get(f"{api_base}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("   ✅ Root endpoint working correctly")
            else:
                print(f"   ❌ Unexpected response: {data}")
                all_tests_passed = False
        else:
            print(f"   ❌ Root endpoint failed with status: {response.status_code}")
            all_tests_passed = False
    except Exception as e:
        print(f"   ❌ Root endpoint error: {e}")
        all_tests_passed = False
    
    # Test 2: Create status check (POST /api/status)
    print("\n2. Testing Create Status Check (POST /api/status)")
    try:
        test_data = {
            "client_name": "test_client_mira_gallery"
        }
        response = requests.post(f"{api_base}/status", 
                               json=test_data, 
                               headers={"Content-Type": "application/json"},
                               timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "client_name", "timestamp"]
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("   ✅ Status check creation working correctly")
                    created_id = data["id"]
                else:
                    print(f"   ❌ Client name mismatch: expected {test_data['client_name']}, got {data['client_name']}")
                    all_tests_passed = False
            else:
                print(f"   ❌ Missing required fields in response: {data}")
                all_tests_passed = False
        else:
            print(f"   ❌ Status check creation failed with status: {response.status_code}")
            print(f"   Response: {response.text}")
            all_tests_passed = False
    except Exception as e:
        print(f"   ❌ Status check creation error: {e}")
        all_tests_passed = False
    
    # Test 3: Get status checks (GET /api/status)
    print("\n3. Testing Get Status Checks (GET /api/status)")
    try:
        response = requests.get(f"{api_base}/status", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"   ✅ Status checks retrieval working correctly (found {len(data)} records)")
                # Verify our test record exists
                test_record_found = any(
                    record.get("client_name") == "test_client_mira_gallery" 
                    for record in data
                )
                if test_record_found:
                    print("   ✅ Test record found in database")
                else:
                    print("   ⚠️  Test record not found (may be expected if database was cleared)")
            else:
                print(f"   ❌ Expected list response, got: {type(data)}")
                all_tests_passed = False
        else:
            print(f"   ❌ Status checks retrieval failed with status: {response.status_code}")
            all_tests_passed = False
    except Exception as e:
        print(f"   ❌ Status checks retrieval error: {e}")
        all_tests_passed = False
    
    # Test 4: Database connectivity test
    print("\n4. Testing Database Connectivity")
    try:
        # Create another record to test database persistence
        test_data_2 = {
            "client_name": "mira_db_connectivity_test"
        }
        response = requests.post(f"{api_base}/status", 
                               json=test_data_2, 
                               headers={"Content-Type": "application/json"},
                               timeout=10)
        
        if response.status_code == 200:
            # Immediately fetch to verify persistence
            get_response = requests.get(f"{api_base}/status", timeout=10)
            if get_response.status_code == 200:
                records = get_response.json()
                db_test_found = any(
                    record.get("client_name") == "mira_db_connectivity_test" 
                    for record in records
                )
                if db_test_found:
                    print("   ✅ Database connectivity and persistence working correctly")
                else:
                    print("   ❌ Database persistence issue - record not found after creation")
                    all_tests_passed = False
            else:
                print("   ❌ Could not verify database persistence")
                all_tests_passed = False
        else:
            print("   ❌ Database connectivity test failed")
            all_tests_passed = False
    except Exception as e:
        print(f"   ❌ Database connectivity test error: {e}")
        all_tests_passed = False
    
    print("\n" + "=" * 60)
    if all_tests_passed:
        print("🎉 ALL BACKEND TESTS PASSED - Backend APIs working correctly!")
        return True
    else:
        print("❌ SOME BACKEND TESTS FAILED - Issues detected in backend functionality")
        return False

if __name__ == "__main__":
    success = test_backend_apis()
    sys.exit(0 if success else 1)