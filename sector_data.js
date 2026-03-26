// Australian Student Visa Sector Data
// Source: Dept of Home Affairs BP0015 pivot cache, locked 31 Jan 2026
// Primary applicants only | Periods: fy2425 (Jul24-Jun25), fy2324, ytd (Jul25-Jan26)
// Sectors: higher_ed, postgrad_research, vet, elicos, schools, non_award, foreign_affairs

const SECTOR_LABELS = {
  higher_ed: "Higher Education",
  postgrad_research: "Postgraduate Research",
  vet: "VET",
  elicos: "ELICOS",
  schools: "Schools",
  non_award: "Non-Award",
  foreign_affairs: "Foreign Affairs & Defence",
};

const SECTOR_GLOBAL = {
  "fy2425": {
    "foreign_affairs": {
      "lodged": 3890,
      "granted": 3816,
      "grant_rate": 99.5
    },
    "higher_ed": {
      "lodged": 228906,
      "granted": 206300,
      "grant_rate": 91.9
    },
    "elicos": {
      "lodged": 27515,
      "granted": 24310,
      "grant_rate": 78.8
    },
    "non_award": {
      "lodged": 17375,
      "granted": 17241,
      "grant_rate": 99.5
    },
    "postgrad_research": {
      "lodged": 9693,
      "granted": 8361,
      "grant_rate": 98.3
    },
    "schools": {
      "lodged": 9669,
      "granted": 9074,
      "grant_rate": 86.3
    },
    "vet": {
      "lodged": 71377,
      "granted": 53671,
      "grant_rate": 58.1
    }
  },
  "fy2324": {
    "foreign_affairs": {
      "lodged": 3662,
      "granted": 3602,
      "grant_rate": 99.3
    },
    "higher_ed": {
      "lodged": 270390,
      "granted": 201907,
      "grant_rate": 84.2
    },
    "elicos": {
      "lodged": 49554,
      "granted": 35496,
      "grant_rate": 81.0
    },
    "non_award": {
      "lodged": 17947,
      "granted": 17629,
      "grant_rate": 99.4
    },
    "postgrad_research": {
      "lodged": 9063,
      "granted": 8326,
      "grant_rate": 97.8
    },
    "schools": {
      "lodged": 12511,
      "granted": 9771,
      "grant_rate": 90.6
    },
    "vet": {
      "lodged": 135364,
      "granted": 55044,
      "grant_rate": 61.4
    }
  },
  "ytd": {
    "foreign_affairs": {
      "lodged": 2208,
      "granted": 2139,
      "grant_rate": 99.2
    },
    "higher_ed": {
      "lodged": 138327,
      "granted": 122341,
      "grant_rate": 88.2
    },
    "elicos": {
      "lodged": 11459,
      "granted": 10683,
      "grant_rate": 78.8
    },
    "non_award": {
      "lodged": 9104,
      "granted": 9047,
      "grant_rate": 99.3
    },
    "postgrad_research": {
      "lodged": 6671,
      "granted": 6845,
      "grant_rate": 97.4
    },
    "schools": {
      "lodged": 4754,
      "granted": 4420,
      "grant_rate": 90.2
    },
    "vet": {
      "lodged": 37211,
      "granted": 24066,
      "grant_rate": 52.2
    }
  }
};

const SECTOR_DATA = {
  "004": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 22,
      "sectors": {
        "vet": {"lodged": 11, "granted": 1, "grant_rate": 5.9},
        "postgrad_research": {"lodged": 6, "granted": 3, "grant_rate": 60.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "non_award": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 46,
      "sectors": {
        "vet": {"lodged": 26, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 9, "granted": 4, "grant_rate": 33.3},
        "postgrad_research": {"lodged": 8, "granted": 6, "grant_rate": 75.0},
        "schools": {"lodged": 2, "granted": 0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 26,
      "sectors": {
        "vet": {"lodged": 12, "granted": 1, "grant_rate": 14.3},
        "higher_ed": {"lodged": 5, "granted": 0},
        "postgrad_research": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "008": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 40,
      "sectors": {
        "vet": {"lodged": 19, "granted": 3, "grant_rate": 11.5},
        "higher_ed": {"lodged": 12, "granted": 6, "grant_rate": 75.0},
        "elicos": {"lodged": 4, "granted": 1, "grant_rate": 16.7},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 71,
      "sectors": {
        "vet": {"lodged": 32, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 16, "granted": 10, "grant_rate": 58.8},
        "elicos": {"lodged": 16, "granted": 4, "grant_rate": 30.8},
        "postgrad_research": {"lodged": 4, "granted": 4, "grant_rate": 80.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 27,
      "sectors": {
        "higher_ed": {"lodged": 10, "granted": 5, "grant_rate": 50.0},
        "vet": {"lodged": 10, "granted": 1, "grant_rate": 10.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "012": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 21,
      "sectors": {
        "non_award": {"lodged": 6, "granted": 3, "grant_rate": 100.0},
        "higher_ed": {"lodged": 5, "granted": 8, "grant_rate": 88.9},
        "vet": {"lodged": 5, "granted": 1, "grant_rate": 25.0},
        "elicos": {"lodged": 5, "granted": 2, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 29,
      "sectors": {
        "vet": {"lodged": 13, "granted": 4, "grant_rate": 66.7},
        "higher_ed": {"lodged": 8, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 1, "grant_rate": 50.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 27,
      "sectors": {
        "vet": {"lodged": 9, "granted": 0, "grant_rate": 0.0},
        "elicos": {"lodged": 6, "granted": 3, "grant_rate": 75.0},
        "postgrad_research": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "non_award": {"lodged": 4, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
  },
  "024": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 4,
      "sectors": {
        "elicos": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 6,
      "sectors": {
        "vet": {"lodged": 3, "granted": 0},
        "higher_ed": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 2,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 1, "granted": 0},
      }
    },
  },
  "031": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 22,
      "sectors": {
        "higher_ed": {"lodged": 14, "granted": 14, "grant_rate": 87.5},
        "elicos": {"lodged": 4, "granted": 3, "grant_rate": 37.5},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 43,
      "sectors": {
        "higher_ed": {"lodged": 13, "granted": 6, "grant_rate": 100.0},
        "vet": {"lodged": 12, "granted": 7, "grant_rate": 70.0},
        "elicos": {"lodged": 12, "granted": 4, "grant_rate": 44.4},
        "postgrad_research": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 19,
      "sectors": {
        "higher_ed": {"lodged": 16, "granted": 12, "grant_rate": 92.3},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "032": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 1841,
      "sectors": {
        "vet": {"lodged": 1145, "granted": 1154, "grant_rate": 81.3},
        "elicos": {"lodged": 530, "granted": 557, "grant_rate": 88.6},
        "higher_ed": {"lodged": 109, "granted": 106, "grant_rate": 92.2},
        "schools": {"lodged": 30, "granted": 24, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 16, "granted": 18, "grant_rate": 100.0},
        "non_award": {"lodged": 11, "granted": 10, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 2446,
      "sectors": {
        "vet": {"lodged": 1340, "granted": 597, "grant_rate": 89.1},
        "elicos": {"lodged": 960, "granted": 758, "grant_rate": 93.6},
        "higher_ed": {"lodged": 97, "granted": 55, "grant_rate": 96.5},
        "schools": {"lodged": 25, "granted": 27, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 15, "granted": 11, "grant_rate": 100.0},
        "non_award": {"lodged": 9, "granted": 9, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 701,
      "sectors": {
        "vet": {"lodged": 434, "granted": 444, "grant_rate": 81.3},
        "elicos": {"lodged": 193, "granted": 188, "grant_rate": 83.2},
        "higher_ed": {"lodged": 50, "granted": 57, "grant_rate": 96.6},
        "schools": {"lodged": 19, "granted": 26, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 4, "grant_rate": 80.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "040": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 206,
      "sectors": {
        "non_award": {"lodged": 113, "granted": 113, "grant_rate": 100.0},
        "schools": {"lodged": 32, "granted": 31, "grant_rate": 96.9},
        "vet": {"lodged": 21, "granted": 17, "grant_rate": 81.0},
        "higher_ed": {"lodged": 20, "granted": 20, "grant_rate": 100.0},
        "elicos": {"lodged": 13, "granted": 13, "grant_rate": 92.9},
        "postgrad_research": {"lodged": 7, "granted": 8, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 211,
      "sectors": {
        "non_award": {"lodged": 112, "granted": 113, "grant_rate": 100.0},
        "schools": {"lodged": 46, "granted": 43, "grant_rate": 97.7},
        "vet": {"lodged": 20, "granted": 7, "grant_rate": 77.8},
        "higher_ed": {"lodged": 17, "granted": 13, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 8, "grant_rate": 100.0},
        "elicos": {"lodged": 7, "granted": 5, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 122,
      "sectors": {
        "non_award": {"lodged": 54, "granted": 54, "grant_rate": 100.0},
        "schools": {"lodged": 31, "granted": 31, "grant_rate": 100.0},
        "higher_ed": {"lodged": 13, "granted": 15, "grant_rate": 100.0},
        "vet": {"lodged": 12, "granted": 11, "grant_rate": 78.6},
        "postgrad_research": {"lodged": 8, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "048": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 4,
      "sectors": {
        "higher_ed": {"lodged": 4, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 0, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 13,
      "sectors": {
        "higher_ed": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "vet": {"lodged": 5, "granted": 4, "grant_rate": 80.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 2,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0},
      }
    },
  },
  "050": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 11711,
      "sectors": {
        "higher_ed": {"lodged": 10700, "granted": 10285, "grant_rate": 96.0},
        "postgrad_research": {"lodged": 427, "granted": 392, "grant_rate": 99.2},
        "vet": {"lodged": 372, "granted": 212, "grant_rate": 48.0},
        "foreign_affairs": {"lodged": 145, "granted": 141, "grant_rate": 100.0},
        "schools": {"lodged": 56, "granted": 27, "grant_rate": 55.1},
        "non_award": {"lodged": 8, "granted": 9, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 4, "grant_rate": 66.7},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 10649,
      "sectors": {
        "higher_ed": {"lodged": 9463, "granted": 7588, "grant_rate": 91.0},
        "vet": {"lodged": 619, "granted": 188, "grant_rate": 50.8},
        "postgrad_research": {"lodged": 399, "granted": 353, "grant_rate": 99.7},
        "foreign_affairs": {"lodged": 91, "granted": 103, "grant_rate": 100.0},
        "schools": {"lodged": 54, "granted": 25, "grant_rate": 45.5},
        "non_award": {"lodged": 15, "granted": 16, "grant_rate": 94.1},
        "elicos": {"lodged": 8, "granted": 1, "grant_rate": 33.3},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 11212,
      "sectors": {
        "higher_ed": {"lodged": 10209, "granted": 7346, "grant_rate": 85.5},
        "vet": {"lodged": 427, "granted": 189, "grant_rate": 46.2},
        "postgrad_research": {"lodged": 393, "granted": 363, "grant_rate": 97.3},
        "foreign_affairs": {"lodged": 135, "granted": 125, "grant_rate": 100.0},
        "schools": {"lodged": 29, "granted": 13, "grant_rate": 72.2},
        "non_award": {"lodged": 12, "granted": 7, "grant_rate": 87.5},
        "elicos": {"lodged": 7, "granted": 4, "grant_rate": 57.1},
      }
    },
  },
  "051": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 12,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 2, "grant_rate": 50.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 19,
      "sectors": {
        "vet": {"lodged": 11, "granted": 6, "grant_rate": 54.5},
        "elicos": {"lodged": 5, "granted": 2, "grant_rate": 50.0},
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 19,
      "sectors": {
        "higher_ed": {"lodged": 18, "granted": 12, "grant_rate": 92.3},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "052": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 4,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "056": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 343,
      "sectors": {
        "non_award": {"lodged": 94, "granted": 94, "grant_rate": 100.0},
        "elicos": {"lodged": 85, "granted": 77, "grant_rate": 98.7},
        "vet": {"lodged": 84, "granted": 71, "grant_rate": 76.3},
        "higher_ed": {"lodged": 34, "granted": 33, "grant_rate": 94.3},
        "schools": {"lodged": 31, "granted": 20, "grant_rate": 95.2},
        "postgrad_research": {"lodged": 15, "granted": 13, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 338,
      "sectors": {
        "non_award": {"lodged": 107, "granted": 106, "grant_rate": 100.0},
        "elicos": {"lodged": 81, "granted": 79, "grant_rate": 100.0},
        "vet": {"lodged": 74, "granted": 44, "grant_rate": 93.6},
        "schools": {"lodged": 34, "granted": 31, "grant_rate": 100.0},
        "higher_ed": {"lodged": 33, "granted": 27, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 10, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 176,
      "sectors": {
        "elicos": {"lodged": 56, "granted": 60, "grant_rate": 96.8},
        "vet": {"lodged": 48, "granted": 40, "grant_rate": 83.3},
        "non_award": {"lodged": 37, "granted": 36, "grant_rate": 100.0},
        "higher_ed": {"lodged": 20, "granted": 19, "grant_rate": 95.0},
        "postgrad_research": {"lodged": 8, "granted": 7, "grant_rate": 100.0},
        "schools": {"lodged": 7, "granted": 21, "grant_rate": 100.0},
      }
    },
  },
  "064": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 4170,
      "sectors": {
        "higher_ed": {"lodged": 3446, "granted": 2486, "grant_rate": 91.3},
        "vet": {"lodged": 523, "granted": 363, "grant_rate": 58.8},
        "postgrad_research": {"lodged": 145, "granted": 64, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 41, "granted": 40, "grant_rate": 100.0},
        "elicos": {"lodged": 11, "granted": 7, "grant_rate": 46.7},
        "schools": {"lodged": 3, "granted": 4, "grant_rate": 80.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 6358,
      "sectors": {
        "higher_ed": {"lodged": 5384, "granted": 4289, "grant_rate": 81.9},
        "vet": {"lodged": 834, "granted": 288, "grant_rate": 60.0},
        "postgrad_research": {"lodged": 47, "granted": 46, "grant_rate": 100.0},
        "elicos": {"lodged": 43, "granted": 23, "grant_rate": 67.6},
        "foreign_affairs": {"lodged": 41, "granted": 41, "grant_rate": 100.0},
        "schools": {"lodged": 7, "granted": 4, "grant_rate": 66.7},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 3175,
      "sectors": {
        "higher_ed": {"lodged": 2626, "granted": 2655, "grant_rate": 88.4},
        "vet": {"lodged": 288, "granted": 180, "grant_rate": 51.9},
        "postgrad_research": {"lodged": 206, "granted": 264, "grant_rate": 98.1},
        "foreign_affairs": {"lodged": 37, "granted": 37, "grant_rate": 100.0},
        "elicos": {"lodged": 9, "granted": 4, "grant_rate": 44.4},
        "non_award": {"lodged": 6, "granted": 3, "grant_rate": 75.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "068": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 78,
      "sectors": {
        "elicos": {"lodged": 32, "granted": 24, "grant_rate": 66.7},
        "vet": {"lodged": 26, "granted": 23, "grant_rate": 65.7},
        "higher_ed": {"lodged": 15, "granted": 11, "grant_rate": 91.7},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 135,
      "sectors": {
        "elicos": {"lodged": 74, "granted": 48, "grant_rate": 67.6},
        "vet": {"lodged": 44, "granted": 15, "grant_rate": 78.9},
        "higher_ed": {"lodged": 15, "granted": 13, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 28,
      "sectors": {
        "elicos": {"lodged": 11, "granted": 10, "grant_rate": 83.3},
        "higher_ed": {"lodged": 8, "granted": 7, "grant_rate": 70.0},
        "vet": {"lodged": 7, "granted": 9, "grant_rate": 75.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "070": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 6,
      "sectors": {
        "vet": {"lodged": 5, "granted": 1, "grant_rate": 20.0},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 0, "granted": 2, "grant_rate": 66.7},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 21,
      "sectors": {
        "vet": {"lodged": 10, "granted": 8, "grant_rate": 100.0},
        "elicos": {"lodged": 7, "granted": 3, "grant_rate": 75.0},
        "higher_ed": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "postgrad_research",
      "total_lodged": 2,
      "sectors": {
        "postgrad_research": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "072": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 96,
      "sectors": {
        "higher_ed": {"lodged": 74, "granted": 66, "grant_rate": 97.1},
        "vet": {"lodged": 10, "granted": 4, "grant_rate": 21.1},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 107,
      "sectors": {
        "higher_ed": {"lodged": 73, "granted": 68, "grant_rate": 97.1},
        "vet": {"lodged": 21, "granted": 5, "grant_rate": 33.3},
        "foreign_affairs": {"lodged": 11, "granted": 11, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 42,
      "sectors": {
        "higher_ed": {"lodged": 36, "granted": 36, "grant_rate": 94.7},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "076": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 12505,
      "sectors": {
        "elicos": {"lodged": 5648, "granted": 5238, "grant_rate": 89.3},
        "vet": {"lodged": 5345, "granted": 5133, "grant_rate": 75.5},
        "higher_ed": {"lodged": 956, "granted": 914, "grant_rate": 93.8},
        "schools": {"lodged": 412, "granted": 368, "grant_rate": 98.9},
        "postgrad_research": {"lodged": 94, "granted": 90, "grant_rate": 98.9},
        "non_award": {"lodged": 50, "granted": 47, "grant_rate": 97.9},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 16825,
      "sectors": {
        "elicos": {"lodged": 8111, "granted": 6817, "grant_rate": 94.6},
        "vet": {"lodged": 7419, "granted": 3072, "grant_rate": 85.1},
        "higher_ed": {"lodged": 725, "granted": 393, "grant_rate": 98.0},
        "schools": {"lodged": 428, "granted": 421, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 93, "granted": 86, "grant_rate": 100.0},
        "non_award": {"lodged": 48, "granted": 43, "grant_rate": 97.7},
        "foreign_affairs": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 4549,
      "sectors": {
        "elicos": {"lodged": 2107, "granted": 2275, "grant_rate": 85.1},
        "vet": {"lodged": 1827, "granted": 2103, "grant_rate": 72.7},
        "higher_ed": {"lodged": 380, "granted": 462, "grant_rate": 90.8},
        "schools": {"lodged": 146, "granted": 192, "grant_rate": 99.5},
        "postgrad_research": {"lodged": 56, "granted": 64, "grant_rate": 100.0},
        "non_award": {"lodged": 33, "granted": 36, "grant_rate": 100.0},
      }
    },
  },
  "090": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 230,
      "sectors": {
        "foreign_affairs": {"lodged": 137, "granted": 130, "grant_rate": 100.0},
        "higher_ed": {"lodged": 62, "granted": 55, "grant_rate": 98.2},
        "vet": {"lodged": 18, "granted": 7, "grant_rate": 43.8},
        "postgrad_research": {"lodged": 10, "granted": 10, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 171,
      "sectors": {
        "foreign_affairs": {"lodged": 98, "granted": 91, "grant_rate": 97.8},
        "higher_ed": {"lodged": 37, "granted": 32, "grant_rate": 88.9},
        "vet": {"lodged": 26, "granted": 15, "grant_rate": 75.0},
        "postgrad_research": {"lodged": 6, "granted": 1, "grant_rate": 50.0},
        "schools": {"lodged": 4, "granted": 3, "grant_rate": 75.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 123,
      "sectors": {
        "foreign_affairs": {"lodged": 88, "granted": 85, "grant_rate": 97.7},
        "higher_ed": {"lodged": 19, "granted": 22, "grant_rate": 100.0},
        "vet": {"lodged": 13, "granted": 12, "grant_rate": 63.2},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
        "postgrad_research": {"lodged": 0, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "096": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 125,
      "sectors": {
        "higher_ed": {"lodged": 82, "granted": 78, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 29, "granted": 25, "grant_rate": 100.0},
        "vet": {"lodged": 7, "granted": 6, "grant_rate": 75.0},
        "non_award": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 122,
      "sectors": {
        "higher_ed": {"lodged": 76, "granted": 73, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 24, "granted": 24, "grant_rate": 100.0},
        "vet": {"lodged": 11, "granted": 7, "grant_rate": 77.8},
        "non_award": {"lodged": 9, "granted": 9, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 92,
      "sectors": {
        "higher_ed": {"lodged": 64, "granted": 61, "grant_rate": 98.4},
        "vet": {"lodged": 15, "granted": 17, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 7, "granted": 8, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "100": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 35,
      "sectors": {
        "non_award": {"lodged": 17, "granted": 16, "grant_rate": 100.0},
        "vet": {"lodged": 6, "granted": 7, "grant_rate": 58.3},
        "higher_ed": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 44,
      "sectors": {
        "non_award": {"lodged": 15, "granted": 16, "grant_rate": 100.0},
        "vet": {"lodged": 14, "granted": 4, "grant_rate": 66.7},
        "higher_ed": {"lodged": 7, "granted": 5, "grant_rate": 100.0},
        "elicos": {"lodged": 6, "granted": 5, "grant_rate": 83.3},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 20,
      "sectors": {
        "non_award": {"lodged": 11, "granted": 10, "grant_rate": 100.0},
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 2, "grant_rate": 50.0},
        "elicos": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "104": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 337,
      "sectors": {
        "higher_ed": {"lodged": 233, "granted": 179, "grant_rate": 71.0},
        "foreign_affairs": {"lodged": 71, "granted": 66, "grant_rate": 100.0},
        "vet": {"lodged": 14, "granted": 4, "grant_rate": 25.0},
        "postgrad_research": {"lodged": 12, "granted": 7, "grant_rate": 63.6},
        "schools": {"lodged": 5, "granted": 3, "grant_rate": 50.0},
        "non_award": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 622,
      "sectors": {
        "higher_ed": {"lodged": 493, "granted": 296, "grant_rate": 75.1},
        "foreign_affairs": {"lodged": 64, "granted": 121, "grant_rate": 98.4},
        "vet": {"lodged": 29, "granted": 14, "grant_rate": 63.6},
        "postgrad_research": {"lodged": 13, "granted": 13, "grant_rate": 86.7},
        "schools": {"lodged": 11, "granted": 4, "grant_rate": 40.0},
        "non_award": {"lodged": 8, "granted": 3, "grant_rate": 60.0},
        "elicos": {"lodged": 4, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 118,
      "sectors": {
        "higher_ed": {"lodged": 99, "granted": 74, "grant_rate": 59.2},
        "postgrad_research": {"lodged": 7, "granted": 3, "grant_rate": 42.9},
        "vet": {"lodged": 3, "granted": 2, "grant_rate": 25.0},
        "schools": {"lodged": 3, "granted": 1, "grant_rate": 25.0},
        "non_award": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 2, "granted": 7, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "108": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 6, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 7, "granted": 4, "grant_rate": 50.0},
        "vet": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 5,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 5, "grant_rate": 83.3},
        "vet": {"lodged": 1, "granted": 0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "112": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 12,
      "sectors": {
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "higher_ed": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 19,
      "sectors": {
        "elicos": {"lodged": 7, "granted": 3, "grant_rate": 42.9},
        "vet": {"lodged": 5, "granted": 1, "grant_rate": 50.0},
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 8,
      "sectors": {
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "116": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 1874,
      "sectors": {
        "higher_ed": {"lodged": 1357, "granted": 1278, "grant_rate": 95.3},
        "schools": {"lodged": 274, "granted": 201, "grant_rate": 77.0},
        "foreign_affairs": {"lodged": 144, "granted": 145, "grant_rate": 98.6},
        "vet": {"lodged": 67, "granted": 62, "grant_rate": 62.6},
        "postgrad_research": {"lodged": 15, "granted": 15, "grant_rate": 100.0},
        "elicos": {"lodged": 11, "granted": 6, "grant_rate": 54.5},
        "non_award": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 2090,
      "sectors": {
        "higher_ed": {"lodged": 1472, "granted": 1315, "grant_rate": 95.5},
        "schools": {"lodged": 282, "granted": 240, "grant_rate": 89.6},
        "foreign_affairs": {"lodged": 161, "granted": 154, "grant_rate": 100.0},
        "vet": {"lodged": 142, "granted": 62, "grant_rate": 68.9},
        "postgrad_research": {"lodged": 17, "granted": 14, "grant_rate": 100.0},
        "elicos": {"lodged": 13, "granted": 3, "grant_rate": 23.1},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1342,
      "sectors": {
        "higher_ed": {"lodged": 1045, "granted": 968, "grant_rate": 95.6},
        "schools": {"lodged": 159, "granted": 146, "grant_rate": 82.0},
        "foreign_affairs": {"lodged": 73, "granted": 71, "grant_rate": 100.0},
        "vet": {"lodged": 47, "granted": 26, "grant_rate": 63.4},
        "non_award": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "elicos": {"lodged": 6, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 4, "granted": 7, "grant_rate": 100.0},
      }
    },
  },
  "120": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 24,
      "sectors": {
        "higher_ed": {"lodged": 11, "granted": 4, "grant_rate": 57.1},
        "elicos": {"lodged": 8, "granted": 1, "grant_rate": 16.7},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 33,
      "sectors": {
        "higher_ed": {"lodged": 17, "granted": 3, "grant_rate": 17.6},
        "vet": {"lodged": 7, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 4, "granted": 2, "grant_rate": 66.7},
        "elicos": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 21,
      "sectors": {
        "elicos": {"lodged": 8, "granted": 1, "grant_rate": 11.1},
        "higher_ed": {"lodged": 5, "granted": 4, "grant_rate": 66.7},
        "vet": {"lodged": 4, "granted": 1, "grant_rate": 33.3},
        "foreign_affairs": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "124": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 1884,
      "sectors": {
        "higher_ed": {"lodged": 1065, "granted": 1014, "grant_rate": 98.9},
        "non_award": {"lodged": 574, "granted": 580, "grant_rate": 100.0},
        "vet": {"lodged": 167, "granted": 177, "grant_rate": 86.8},
        "postgrad_research": {"lodged": 59, "granted": 55, "grant_rate": 100.0},
        "schools": {"lodged": 17, "granted": 18, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 2056,
      "sectors": {
        "higher_ed": {"lodged": 1059, "granted": 1027, "grant_rate": 99.0},
        "non_award": {"lodged": 690, "granted": 673, "grant_rate": 99.9},
        "vet": {"lodged": 246, "granted": 152, "grant_rate": 89.9},
        "postgrad_research": {"lodged": 42, "granted": 40, "grant_rate": 100.0},
        "schools": {"lodged": 15, "granted": 15, "grant_rate": 93.8},
        "elicos": {"lodged": 4, "granted": 2, "grant_rate": 50.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1390,
      "sectors": {
        "higher_ed": {"lodged": 868, "granted": 925, "grant_rate": 98.7},
        "non_award": {"lodged": 382, "granted": 380, "grant_rate": 99.7},
        "vet": {"lodged": 95, "granted": 84, "grant_rate": 82.4},
        "postgrad_research": {"lodged": 32, "granted": 32, "grant_rate": 97.0},
        "schools": {"lodged": 12, "granted": 11, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "144": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 8111,
      "sectors": {
        "higher_ed": {"lodged": 6542, "granted": 6700, "grant_rate": 94.0},
        "vet": {"lodged": 877, "granted": 502, "grant_rate": 43.8},
        "postgrad_research": {"lodged": 477, "granted": 457, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 123, "granted": 122, "grant_rate": 100.0},
        "schools": {"lodged": 67, "granted": 65, "grant_rate": 82.3},
        "non_award": {"lodged": 16, "granted": 10, "grant_rate": 100.0},
        "elicos": {"lodged": 9, "granted": 3, "grant_rate": 30.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 10860,
      "sectors": {
        "higher_ed": {"lodged": 8569, "granted": 6150, "grant_rate": 89.7},
        "vet": {"lodged": 1572, "granted": 467, "grant_rate": 55.3},
        "postgrad_research": {"lodged": 484, "granted": 437, "grant_rate": 99.1},
        "schools": {"lodged": 97, "granted": 75, "grant_rate": 91.5},
        "foreign_affairs": {"lodged": 91, "granted": 90, "grant_rate": 100.0},
        "non_award": {"lodged": 31, "granted": 28, "grant_rate": 96.6},
        "elicos": {"lodged": 16, "granted": 7, "grant_rate": 77.8},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 4445,
      "sectors": {
        "higher_ed": {"lodged": 3557, "granted": 2917, "grant_rate": 89.5},
        "vet": {"lodged": 389, "granted": 218, "grant_rate": 42.2},
        "postgrad_research": {"lodged": 333, "granted": 309, "grant_rate": 97.5},
        "schools": {"lodged": 85, "granted": 44, "grant_rate": 84.6},
        "foreign_affairs": {"lodged": 58, "granted": 59, "grant_rate": 100.0},
        "non_award": {"lodged": 16, "granted": 11, "grant_rate": 91.7},
        "elicos": {"lodged": 7, "granted": 7, "grant_rate": 77.8},
      }
    },
  },
  "148": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 4,
      "sectors": {
        "vet": {"lodged": 2, "granted": 0},
        "higher_ed": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 0,
      "sectors": {
        "higher_ed": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "152": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 3100,
      "sectors": {
        "vet": {"lodged": 1592, "granted": 1537, "grant_rate": 81.3},
        "elicos": {"lodged": 1134, "granted": 1160, "grant_rate": 90.9},
        "higher_ed": {"lodged": 247, "granted": 254, "grant_rate": 98.1},
        "schools": {"lodged": 55, "granted": 48, "grant_rate": 98.0},
        "postgrad_research": {"lodged": 42, "granted": 48, "grant_rate": 100.0},
        "non_award": {"lodged": 30, "granted": 30, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 4088,
      "sectors": {
        "elicos": {"lodged": 2080, "granted": 1866, "grant_rate": 94.0},
        "vet": {"lodged": 1631, "granted": 800, "grant_rate": 91.6},
        "higher_ed": {"lodged": 232, "granted": 175, "grant_rate": 100.0},
        "schools": {"lodged": 53, "granted": 52, "grant_rate": 96.3},
        "non_award": {"lodged": 50, "granted": 50, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 42, "granted": 32, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 1141,
      "sectors": {
        "vet": {"lodged": 505, "granted": 559, "grant_rate": 79.5},
        "elicos": {"lodged": 476, "granted": 504, "grant_rate": 92.1},
        "higher_ed": {"lodged": 110, "granted": 130, "grant_rate": 95.6},
        "postgrad_research": {"lodged": 22, "granted": 29, "grant_rate": 100.0},
        "schools": {"lodged": 15, "granted": 21, "grant_rate": 95.5},
        "non_award": {"lodged": 13, "granted": 13, "grant_rate": 100.0},
      }
    },
  },
  "156": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 92402,
      "sectors": {
        "higher_ed": {"lodged": 80901, "granted": 77696, "grant_rate": 96.2},
        "vet": {"lodged": 3480, "granted": 1722, "grant_rate": 45.4},
        "schools": {"lodged": 3114, "granted": 3124, "grant_rate": 80.0},
        "postgrad_research": {"lodged": 3029, "granted": 2337, "grant_rate": 99.3},
        "non_award": {"lodged": 977, "granted": 875, "grant_rate": 97.2},
        "elicos": {"lodged": 901, "granted": 406, "grant_rate": 32.1},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 104303,
      "sectors": {
        "higher_ed": {"lodged": 87908, "granted": 80024, "grant_rate": 97.4},
        "vet": {"lodged": 7456, "granted": 2562, "grant_rate": 51.5},
        "schools": {"lodged": 4120, "granted": 2616, "grant_rate": 85.6},
        "postgrad_research": {"lodged": 2653, "granted": 2563, "grant_rate": 97.7},
        "elicos": {"lodged": 1347, "granted": 379, "grant_rate": 57.0},
        "non_award": {"lodged": 819, "granted": 768, "grant_rate": 97.8},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 42920,
      "sectors": {
        "higher_ed": {"lodged": 37184, "granted": 39166, "grant_rate": 96.4},
        "postgrad_research": {"lodged": 2007, "granted": 1958, "grant_rate": 98.7},
        "vet": {"lodged": 1526, "granted": 953, "grant_rate": 35.4},
        "schools": {"lodged": 1372, "granted": 1185, "grant_rate": 86.4},
        "non_award": {"lodged": 598, "granted": 589, "grant_rate": 98.5},
        "elicos": {"lodged": 233, "granted": 108, "grant_rate": 29.9},
      }
    },
  },
  "158": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 4964,
      "sectors": {
        "higher_ed": {"lodged": 2266, "granted": 2091, "grant_rate": 99.1},
        "vet": {"lodged": 1656, "granted": 1104, "grant_rate": 57.8},
        "elicos": {"lodged": 676, "granted": 579, "grant_rate": 79.1},
        "schools": {"lodged": 218, "granted": 215, "grant_rate": 99.1},
        "non_award": {"lodged": 98, "granted": 109, "grant_rate": 98.2},
        "postgrad_research": {"lodged": 50, "granted": 54, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 5514,
      "sectors": {
        "vet": {"lodged": 2318, "granted": 914, "grant_rate": 73.7},
        "higher_ed": {"lodged": 2137, "granted": 2027, "grant_rate": 99.0},
        "elicos": {"lodged": 634, "granted": 374, "grant_rate": 95.9},
        "schools": {"lodged": 242, "granted": 227, "grant_rate": 98.7},
        "non_award": {"lodged": 126, "granted": 118, "grant_rate": 99.2},
        "postgrad_research": {"lodged": 57, "granted": 49, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 2554,
      "sectors": {
        "higher_ed": {"lodged": 1396, "granted": 1544, "grant_rate": 99.2},
        "vet": {"lodged": 696, "granted": 554, "grant_rate": 48.4},
        "elicos": {"lodged": 263, "granted": 270, "grant_rate": 77.4},
        "schools": {"lodged": 135, "granted": 136, "grant_rate": 99.3},
        "non_award": {"lodged": 42, "granted": 44, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 22, "granted": 25, "grant_rate": 100.0},
      }
    },
  },
  "170": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 10280,
      "sectors": {
        "vet": {"lodged": 5302, "granted": 7112, "grant_rate": 67.2},
        "elicos": {"lodged": 3902, "granted": 3750, "grant_rate": 78.6},
        "higher_ed": {"lodged": 975, "granted": 1167, "grant_rate": 93.1},
        "postgrad_research": {"lodged": 53, "granted": 61, "grant_rate": 95.3},
        "non_award": {"lodged": 41, "granted": 36, "grant_rate": 97.3},
        "schools": {"lodged": 7, "granted": 5, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 27025,
      "sectors": {
        "elicos": {"lodged": 13330, "granted": 9148, "grant_rate": 72.8},
        "vet": {"lodged": 12479, "granted": 4208, "grant_rate": 71.5},
        "higher_ed": {"lodged": 1087, "granted": 572, "grant_rate": 96.6},
        "postgrad_research": {"lodged": 71, "granted": 48, "grant_rate": 100.0},
        "non_award": {"lodged": 46, "granted": 42, "grant_rate": 100.0},
        "schools": {"lodged": 12, "granted": 6, "grant_rate": 66.7},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 2926,
      "sectors": {
        "elicos": {"lodged": 1257, "granted": 1261, "grant_rate": 75.6},
        "vet": {"lodged": 1199, "granted": 1056, "grant_rate": 53.5},
        "higher_ed": {"lodged": 400, "granted": 384, "grant_rate": 91.4},
        "postgrad_research": {"lodged": 45, "granted": 49, "grant_rate": 96.1},
        "non_award": {"lodged": 21, "granted": 17, "grant_rate": 94.4},
        "schools": {"lodged": 4, "granted": 8, "grant_rate": 100.0},
      }
    },
  },
  "178": {
    "fy2324": {
      "dominant": "postgrad_research",
      "total_lodged": 2,
      "sectors": {
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 2,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "180": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 20,
      "sectors": {
        "higher_ed": {"lodged": 12, "granted": 9, "grant_rate": 81.8},
        "elicos": {"lodged": 6, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 25,
      "sectors": {
        "elicos": {"lodged": 9, "granted": 1, "grant_rate": 20.0},
        "higher_ed": {"lodged": 8, "granted": 4, "grant_rate": 57.1},
        "vet": {"lodged": 4, "granted": 2, "grant_rate": 66.7},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 7,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 5, "grant_rate": 71.4},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "188": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 32,
      "sectors": {
        "vet": {"lodged": 10, "granted": 8, "grant_rate": 57.1},
        "elicos": {"lodged": 8, "granted": 6, "grant_rate": 60.0},
        "non_award": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 5, "grant_rate": 100.0},
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 57,
      "sectors": {
        "vet": {"lodged": 26, "granted": 14, "grant_rate": 87.5},
        "elicos": {"lodged": 18, "granted": 12, "grant_rate": 92.3},
        "higher_ed": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 18,
      "sectors": {
        "vet": {"lodged": 6, "granted": 6, "grant_rate": 85.7},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "191": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 30,
      "sectors": {
        "non_award": {"lodged": 11, "granted": 11, "grant_rate": 100.0},
        "vet": {"lodged": 7, "granted": 6, "grant_rate": 85.7},
        "elicos": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 26,
      "sectors": {
        "vet": {"lodged": 9, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 9, "granted": 9, "grant_rate": 100.0},
        "higher_ed": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 19,
      "sectors": {
        "non_award": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "higher_ed": {"lodged": 5, "granted": 2, "grant_rate": 66.7},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "192": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 8,
      "sectors": {
        "vet": {"lodged": 4, "granted": 2, "grant_rate": 66.7},
        "elicos": {"lodged": 3, "granted": 1, "grant_rate": 33.3},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 17,
      "sectors": {
        "vet": {"lodged": 7, "granted": 4, "grant_rate": 66.7},
        "elicos": {"lodged": 7, "granted": 3, "grant_rate": 75.0},
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "postgrad_research",
      "total_lodged": 2,
      "sectors": {
        "postgrad_research": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "196": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 18,
      "sectors": {
        "vet": {"lodged": 10, "granted": 5, "grant_rate": 62.5},
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 26,
      "sectors": {
        "vet": {"lodged": 9, "granted": 4, "grant_rate": 66.7},
        "non_award": {"lodged": 9, "granted": 10, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 1, "grant_rate": 25.0},
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 3,
      "sectors": {
        "vet": {"lodged": 2, "granted": 3, "grant_rate": 60.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "203": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 239,
      "sectors": {
        "vet": {"lodged": 94, "granted": 86, "grant_rate": 80.4},
        "elicos": {"lodged": 65, "granted": 70, "grant_rate": 93.3},
        "non_award": {"lodged": 38, "granted": 38, "grant_rate": 100.0},
        "higher_ed": {"lodged": 21, "granted": 19, "grant_rate": 95.0},
        "schools": {"lodged": 18, "granted": 19, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 281,
      "sectors": {
        "vet": {"lodged": 123, "granted": 83, "grant_rate": 94.3},
        "elicos": {"lodged": 70, "granted": 57, "grant_rate": 96.6},
        "non_award": {"lodged": 40, "granted": 39, "grant_rate": 100.0},
        "higher_ed": {"lodged": 26, "granted": 18, "grant_rate": 90.0},
        "schools": {"lodged": 19, "granted": 20, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 124,
      "sectors": {
        "vet": {"lodged": 40, "granted": 44, "grant_rate": 81.5},
        "non_award": {"lodged": 31, "granted": 31, "grant_rate": 100.0},
        "elicos": {"lodged": 26, "granted": 23, "grant_rate": 85.2},
        "higher_ed": {"lodged": 21, "granted": 18, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "204": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 1,
      "sectors": {
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 2,
      "sectors": {
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 3,
      "sectors": {
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
  },
  "208": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 647,
      "sectors": {
        "non_award": {"lodged": 541, "granted": 541, "grant_rate": 100.0},
        "higher_ed": {"lodged": 39, "granted": 41, "grant_rate": 100.0},
        "schools": {"lodged": 34, "granted": 36, "grant_rate": 92.3},
        "vet": {"lodged": 17, "granted": 18, "grant_rate": 94.7},
        "postgrad_research": {"lodged": 11, "granted": 11, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 771,
      "sectors": {
        "non_award": {"lodged": 655, "granted": 657, "grant_rate": 100.0},
        "schools": {"lodged": 50, "granted": 38, "grant_rate": 100.0},
        "higher_ed": {"lodged": 36, "granted": 35, "grant_rate": 100.0},
        "vet": {"lodged": 20, "granted": 17, "grant_rate": 94.4},
        "postgrad_research": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 221,
      "sectors": {
        "non_award": {"lodged": 153, "granted": 160, "grant_rate": 100.0},
        "higher_ed": {"lodged": 23, "granted": 22, "grant_rate": 100.0},
        "schools": {"lodged": 17, "granted": 25, "grant_rate": 96.2},
        "elicos": {"lodged": 14, "granted": 14, "grant_rate": 93.3},
        "vet": {"lodged": 12, "granted": 11, "grant_rate": 91.7},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "214": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 18,
      "sectors": {
        "elicos": {"lodged": 8, "granted": 5, "grant_rate": 83.3},
        "vet": {"lodged": 4, "granted": 2, "grant_rate": 66.7},
        "higher_ed": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 32,
      "sectors": {
        "elicos": {"lodged": 18, "granted": 15, "grant_rate": 88.2},
        "vet": {"lodged": 10, "granted": 4, "grant_rate": 66.7},
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 4,
      "sectors": {
        "vet": {"lodged": 2, "granted": 2, "grant_rate": 66.7},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "higher_ed": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 0, "granted": 2, "grant_rate": 50.0},
      }
    },
  },
  "218": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 1607,
      "sectors": {
        "elicos": {"lodged": 911, "granted": 778, "grant_rate": 76.2},
        "vet": {"lodged": 595, "granted": 627, "grant_rate": 84.0},
        "higher_ed": {"lodged": 89, "granted": 81, "grant_rate": 92.0},
        "postgrad_research": {"lodged": 8, "granted": 9, "grant_rate": 100.0},
        "non_award": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 2892,
      "sectors": {
        "elicos": {"lodged": 1999, "granted": 1446, "grant_rate": 78.2},
        "vet": {"lodged": 775, "granted": 420, "grant_rate": 89.4},
        "higher_ed": {"lodged": 94, "granted": 63, "grant_rate": 91.3},
        "postgrad_research": {"lodged": 12, "granted": 11, "grant_rate": 100.0},
        "non_award": {"lodged": 10, "granted": 10, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 597,
      "sectors": {
        "elicos": {"lodged": 382, "granted": 403, "grant_rate": 83.8},
        "vet": {"lodged": 169, "granted": 148, "grant_rate": 75.1},
        "higher_ed": {"lodged": 40, "granted": 39, "grant_rate": 84.8},
        "postgrad_research": {"lodged": 5, "granted": 6, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "222": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 27,
      "sectors": {
        "vet": {"lodged": 14, "granted": 10, "grant_rate": 66.7},
        "higher_ed": {"lodged": 6, "granted": 5, "grant_rate": 71.4},
        "elicos": {"lodged": 6, "granted": 5, "grant_rate": 62.5},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 49,
      "sectors": {
        "vet": {"lodged": 25, "granted": 16, "grant_rate": 76.2},
        "elicos": {"lodged": 14, "granted": 15, "grant_rate": 100.0},
        "higher_ed": {"lodged": 5, "granted": 1, "grant_rate": 50.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 14,
      "sectors": {
        "vet": {"lodged": 5, "granted": 6, "grant_rate": 75.0},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "higher_ed": {"lodged": 3, "granted": 6, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "231": {
    "fy2425": {
      "dominant": "postgrad_research",
      "total_lodged": 177,
      "sectors": {
        "postgrad_research": {"lodged": 138, "granted": 122, "grant_rate": 96.8},
        "higher_ed": {"lodged": 27, "granted": 24, "grant_rate": 85.7},
        "foreign_affairs": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "postgrad_research",
      "total_lodged": 178,
      "sectors": {
        "postgrad_research": {"lodged": 134, "granted": 115, "grant_rate": 97.5},
        "higher_ed": {"lodged": 20, "granted": 14, "grant_rate": 82.4},
        "vet": {"lodged": 9, "granted": 3, "grant_rate": 30.0},
        "schools": {"lodged": 7, "granted": 3, "grant_rate": 42.9},
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "postgrad_research",
      "total_lodged": 114,
      "sectors": {
        "postgrad_research": {"lodged": 89, "granted": 87, "grant_rate": 100.0},
        "higher_ed": {"lodged": 14, "granted": 7, "grant_rate": 63.6},
        "vet": {"lodged": 6, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
      }
    },
  },
  "232": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 2,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
        "vet": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 4,
      "sectors": {
        "vet": {"lodged": 2, "granted": 0},
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "233": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 99,
      "sectors": {
        "vet": {"lodged": 77, "granted": 80, "grant_rate": 73.4},
        "higher_ed": {"lodged": 13, "granted": 11, "grant_rate": 100.0},
        "non_award": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 100,
      "sectors": {
        "vet": {"lodged": 88, "granted": 27, "grant_rate": 81.8},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 48,
      "sectors": {
        "vet": {"lodged": 35, "granted": 26, "grant_rate": 76.5},
        "higher_ed": {"lodged": 9, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "242": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 1718,
      "sectors": {
        "vet": {"lodged": 1080, "granted": 665, "grant_rate": 61.3},
        "higher_ed": {"lodged": 380, "granted": 245, "grant_rate": 88.4},
        "foreign_affairs": {"lodged": 200, "granted": 187, "grant_rate": 98.9},
        "postgrad_research": {"lodged": 32, "granted": 27, "grant_rate": 100.0},
        "elicos": {"lodged": 12, "granted": 2, "grant_rate": 28.6},
        "schools": {"lodged": 11, "granted": 12, "grant_rate": 80.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 3219,
      "sectors": {
        "vet": {"lodged": 2704, "granted": 1695, "grant_rate": 66.3},
        "higher_ed": {"lodged": 275, "granted": 228, "grant_rate": 96.2},
        "foreign_affairs": {"lodged": 187, "granted": 177, "grant_rate": 97.8},
        "postgrad_research": {"lodged": 25, "granted": 23, "grant_rate": 95.8},
        "schools": {"lodged": 16, "granted": 7, "grant_rate": 77.8},
        "elicos": {"lodged": 8, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 4, "granted": 5, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 1097,
      "sectors": {
        "vet": {"lodged": 670, "granted": 295, "grant_rate": 47.5},
        "higher_ed": {"lodged": 271, "granted": 198, "grant_rate": 81.5},
        "foreign_affairs": {"lodged": 126, "granted": 115, "grant_rate": 97.5},
        "postgrad_research": {"lodged": 16, "granted": 21, "grant_rate": 95.5},
        "schools": {"lodged": 8, "granted": 7, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 1, "grant_rate": 20.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "246": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 146,
      "sectors": {
        "non_award": {"lodged": 63, "granted": 64, "grant_rate": 100.0},
        "vet": {"lodged": 30, "granted": 28, "grant_rate": 87.5},
        "higher_ed": {"lodged": 29, "granted": 32, "grant_rate": 100.0},
        "schools": {"lodged": 17, "granted": 11, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 75.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 165,
      "sectors": {
        "non_award": {"lodged": 82, "granted": 82, "grant_rate": 100.0},
        "vet": {"lodged": 30, "granted": 24, "grant_rate": 85.7},
        "higher_ed": {"lodged": 26, "granted": 22, "grant_rate": 100.0},
        "schools": {"lodged": 21, "granted": 21, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 95,
      "sectors": {
        "non_award": {"lodged": 46, "granted": 45, "grant_rate": 100.0},
        "higher_ed": {"lodged": 20, "granted": 18, "grant_rate": 100.0},
        "vet": {"lodged": 15, "granted": 16, "grant_rate": 100.0},
        "schools": {"lodged": 11, "granted": 19, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 4, "grant_rate": 100.0},
      }
    },
  },
  "250": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 2572,
      "sectors": {
        "non_award": {"lodged": 751, "granted": 764, "grant_rate": 98.7},
        "vet": {"lodged": 709, "granted": 650, "grant_rate": 80.3},
        "elicos": {"lodged": 402, "granted": 412, "grant_rate": 92.0},
        "higher_ed": {"lodged": 373, "granted": 382, "grant_rate": 97.4},
        "schools": {"lodged": 267, "granted": 252, "grant_rate": 97.3},
        "postgrad_research": {"lodged": 59, "granted": 54, "grant_rate": 96.4},
        "foreign_affairs": {"lodged": 11, "granted": 10, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 2807,
      "sectors": {
        "non_award": {"lodged": 904, "granted": 873, "grant_rate": 98.3},
        "vet": {"lodged": 634, "granted": 315, "grant_rate": 88.7},
        "elicos": {"lodged": 597, "granted": 474, "grant_rate": 93.3},
        "higher_ed": {"lodged": 367, "granted": 325, "grant_rate": 98.5},
        "schools": {"lodged": 255, "granted": 226, "grant_rate": 98.7},
        "postgrad_research": {"lodged": 47, "granted": 44, "grant_rate": 97.8},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 1247,
      "sectors": {
        "vet": {"lodged": 376, "granted": 301, "grant_rate": 80.9},
        "non_award": {"lodged": 291, "granted": 289, "grant_rate": 97.0},
        "higher_ed": {"lodged": 244, "granted": 232, "grant_rate": 95.1},
        "elicos": {"lodged": 235, "granted": 263, "grant_rate": 92.3},
        "schools": {"lodged": 78, "granted": 79, "grant_rate": 92.9},
        "postgrad_research": {"lodged": 23, "granted": 26, "grant_rate": 100.0},
      }
    },
  },
  "266": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 1,
      "sectors": {
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 4,
      "sectors": {
        "higher_ed": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
      }
    },
  },
  "268": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 11,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 7,
      "sectors": {
        "elicos": {"lodged": 3, "granted": 1, "grant_rate": 50.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "270": {
    "fy2425": {
      "dominant": "postgrad_research",
      "total_lodged": 3,
      "sectors": {
        "postgrad_research": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 9,
      "sectors": {
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "275": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 14,
      "sectors": {
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 37,
      "sectors": {
        "foreign_affairs": {"lodged": 15, "granted": 15, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 8, "grant_rate": 88.9},
        "higher_ed": {"lodged": 7, "granted": 7, "grant_rate": 87.5},
        "vet": {"lodged": 2, "granted": 0},
        "elicos": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 11,
      "sectors": {
        "foreign_affairs": {"lodged": 5, "granted": 2, "grant_rate": 100.0},
        "higher_ed": {"lodged": 4, "granted": 4, "grant_rate": 66.7},
        "postgrad_research": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "276": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 3241,
      "sectors": {
        "non_award": {"lodged": 1222, "granted": 1212, "grant_rate": 99.9},
        "schools": {"lodged": 1154, "granted": 1100, "grant_rate": 99.0},
        "vet": {"lodged": 373, "granted": 398, "grant_rate": 85.6},
        "higher_ed": {"lodged": 309, "granted": 305, "grant_rate": 98.4},
        "postgrad_research": {"lodged": 111, "granted": 116, "grant_rate": 100.0},
        "elicos": {"lodged": 71, "granted": 74, "grant_rate": 97.4},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 3376,
      "sectors": {
        "non_award": {"lodged": 1474, "granted": 1477, "grant_rate": 99.9},
        "schools": {"lodged": 946, "granted": 896, "grant_rate": 99.6},
        "vet": {"lodged": 453, "granted": 257, "grant_rate": 91.5},
        "higher_ed": {"lodged": 328, "granted": 300, "grant_rate": 99.7},
        "postgrad_research": {"lodged": 114, "granted": 105, "grant_rate": 100.0},
        "elicos": {"lodged": 60, "granted": 54, "grant_rate": 98.2},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "schools",
      "total_lodged": 1672,
      "sectors": {
        "schools": {"lodged": 637, "granted": 640, "grant_rate": 99.5},
        "non_award": {"lodged": 552, "granted": 566, "grant_rate": 99.8},
        "higher_ed": {"lodged": 189, "granted": 208, "grant_rate": 100.0},
        "vet": {"lodged": 170, "granted": 166, "grant_rate": 87.8},
        "postgrad_research": {"lodged": 65, "granted": 63, "grant_rate": 100.0},
        "elicos": {"lodged": 58, "granted": 60, "grant_rate": 96.8},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "288": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 241,
      "sectors": {
        "higher_ed": {"lodged": 135, "granted": 78, "grant_rate": 78.8},
        "postgrad_research": {"lodged": 65, "granted": 52, "grant_rate": 100.0},
        "vet": {"lodged": 21, "granted": 8, "grant_rate": 42.1},
        "foreign_affairs": {"lodged": 16, "granted": 16, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "schools": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 313,
      "sectors": {
        "higher_ed": {"lodged": 173, "granted": 85, "grant_rate": 47.5},
        "postgrad_research": {"lodged": 80, "granted": 82, "grant_rate": 95.3},
        "vet": {"lodged": 47, "granted": 3, "grant_rate": 7.3},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 5, "granted": 3, "grant_rate": 60.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 123,
      "sectors": {
        "higher_ed": {"lodged": 60, "granted": 77, "grant_rate": 87.5},
        "postgrad_research": {"lodged": 43, "granted": 51, "grant_rate": 94.4},
        "vet": {"lodged": 10, "granted": 3, "grant_rate": 25.0},
        "foreign_affairs": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "schools": {"lodged": 2, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "296": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 86,
      "sectors": {
        "foreign_affairs": {"lodged": 77, "granted": 77, "grant_rate": 100.0},
        "vet": {"lodged": 5, "granted": 2, "grant_rate": 28.6},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 0, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 100,
      "sectors": {
        "foreign_affairs": {"lodged": 82, "granted": 79, "grant_rate": 97.5},
        "vet": {"lodged": 10, "granted": 1, "grant_rate": 25.0},
        "higher_ed": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 32,
      "sectors": {
        "foreign_affairs": {"lodged": 30, "granted": 30, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 1, "granted": 4, "grant_rate": 66.7},
      }
    },
  },
  "300": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 52,
      "sectors": {
        "vet": {"lodged": 19, "granted": 33, "grant_rate": 68.8},
        "non_award": {"lodged": 16, "granted": 17, "grant_rate": 100.0},
        "higher_ed": {"lodged": 10, "granted": 16, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 4, "grant_rate": 44.4},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 121,
      "sectors": {
        "vet": {"lodged": 72, "granted": 38, "grant_rate": 82.6},
        "higher_ed": {"lodged": 19, "granted": 13, "grant_rate": 86.7},
        "elicos": {"lodged": 11, "granted": 5, "grant_rate": 83.3},
        "non_award": {"lodged": 10, "granted": 9, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 9, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 32,
      "sectors": {
        "vet": {"lodged": 12, "granted": 8, "grant_rate": 66.7},
        "higher_ed": {"lodged": 11, "granted": 8, "grant_rate": 100.0},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 4, "grant_rate": 100.0},
      }
    },
  },
  "320": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 60,
      "sectors": {
        "vet": {"lodged": 26, "granted": 29, "grant_rate": 80.6},
        "higher_ed": {"lodged": 15, "granted": 15, "grant_rate": 100.0},
        "elicos": {"lodged": 13, "granted": 12, "grant_rate": 100.0},
        "non_award": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 100,
      "sectors": {
        "vet": {"lodged": 38, "granted": 18, "grant_rate": 100.0},
        "elicos": {"lodged": 35, "granted": 31, "grant_rate": 91.2},
        "higher_ed": {"lodged": 23, "granted": 20, "grant_rate": 90.9},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 33,
      "sectors": {
        "higher_ed": {"lodged": 18, "granted": 17, "grant_rate": 100.0},
        "vet": {"lodged": 5, "granted": 9, "grant_rate": 81.8},
        "elicos": {"lodged": 5, "granted": 2, "grant_rate": 50.0},
        "non_award": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "324": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 5,
      "sectors": {
        "elicos": {"lodged": 2, "granted": 0},
        "higher_ed": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 1,
      "sectors": {
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 1,
      "sectors": {
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "332": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 4,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 4,
      "sectors": {
        "vet": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 1, "granted": 0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "340": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 15,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 4, "granted": 2, "grant_rate": 50.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 75.0},
        "non_award": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 13,
      "sectors": {
        "vet": {"lodged": 5, "granted": 2, "grant_rate": 66.7},
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 6,
      "sectors": {
        "higher_ed": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "344": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 3678,
      "sectors": {
        "higher_ed": {"lodged": 2817, "granted": 2600, "grant_rate": 97.7},
        "vet": {"lodged": 356, "granted": 247, "grant_rate": 59.4},
        "schools": {"lodged": 316, "granted": 308, "grant_rate": 96.2},
        "non_award": {"lodged": 139, "granted": 136, "grant_rate": 96.5},
        "elicos": {"lodged": 27, "granted": 26, "grant_rate": 61.9},
        "postgrad_research": {"lodged": 23, "granted": 17, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 4441,
      "sectors": {
        "higher_ed": {"lodged": 3024, "granted": 2717, "grant_rate": 97.0},
        "vet": {"lodged": 740, "granted": 297, "grant_rate": 67.0},
        "schools": {"lodged": 418, "granted": 347, "grant_rate": 95.3},
        "non_award": {"lodged": 166, "granted": 164, "grant_rate": 97.0},
        "elicos": {"lodged": 71, "granted": 30, "grant_rate": 78.9},
        "postgrad_research": {"lodged": 22, "granted": 20, "grant_rate": 95.2},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 2311,
      "sectors": {
        "higher_ed": {"lodged": 1889, "granted": 1779, "grant_rate": 98.0},
        "vet": {"lodged": 157, "granted": 108, "grant_rate": 56.0},
        "schools": {"lodged": 155, "granted": 137, "grant_rate": 98.6},
        "non_award": {"lodged": 90, "granted": 85, "grant_rate": 97.7},
        "elicos": {"lodged": 12, "granted": 13, "grant_rate": 59.1},
        "postgrad_research": {"lodged": 8, "granted": 9, "grant_rate": 100.0},
      }
    },
  },
  "348": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 102,
      "sectors": {
        "vet": {"lodged": 32, "granted": 38, "grant_rate": 82.6},
        "non_award": {"lodged": 29, "granted": 29, "grant_rate": 100.0},
        "elicos": {"lodged": 14, "granted": 11, "grant_rate": 78.6},
        "higher_ed": {"lodged": 13, "granted": 18, "grant_rate": 100.0},
        "schools": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 6, "granted": 7, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 116,
      "sectors": {
        "vet": {"lodged": 40, "granted": 16, "grant_rate": 94.1},
        "non_award": {"lodged": 28, "granted": 28, "grant_rate": 100.0},
        "higher_ed": {"lodged": 22, "granted": 19, "grant_rate": 100.0},
        "elicos": {"lodged": 16, "granted": 13, "grant_rate": 92.9},
        "schools": {"lodged": 7, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 46,
      "sectors": {
        "higher_ed": {"lodged": 12, "granted": 8, "grant_rate": 88.9},
        "non_award": {"lodged": 12, "granted": 12, "grant_rate": 100.0},
        "vet": {"lodged": 9, "granted": 11, "grant_rate": 84.6},
        "schools": {"lodged": 6, "granted": 4, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 4, "grant_rate": 80.0},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "352": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 25,
      "sectors": {
        "non_award": {"lodged": 16, "granted": 16, "grant_rate": 100.0},
        "higher_ed": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 21,
      "sectors": {
        "non_award": {"lodged": 15, "granted": 16, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 5,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "356": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 55156,
      "sectors": {
        "higher_ed": {"lodged": 44266, "granted": 36000, "grant_rate": 82.8},
        "vet": {"lodged": 9521, "granted": 4442, "grant_rate": 32.1},
        "postgrad_research": {"lodged": 875, "granted": 809, "grant_rate": 97.5},
        "non_award": {"lodged": 222, "granted": 247, "grant_rate": 98.0},
        "schools": {"lodged": 107, "granted": 79, "grant_rate": 65.8},
        "foreign_affairs": {"lodged": 83, "granted": 84, "grant_rate": 100.0},
        "elicos": {"lodged": 82, "granted": 39, "grant_rate": 29.1},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 82257,
      "sectors": {
        "higher_ed": {"lodged": 61387, "granted": 36431, "grant_rate": 69.6},
        "vet": {"lodged": 19397, "granted": 6146, "grant_rate": 51.6},
        "postgrad_research": {"lodged": 909, "granted": 820, "grant_rate": 96.4},
        "non_award": {"lodged": 200, "granted": 150, "grant_rate": 96.8},
        "elicos": {"lodged": 157, "granted": 27, "grant_rate": 39.7},
        "schools": {"lodged": 157, "granted": 133, "grant_rate": 91.1},
        "foreign_affairs": {"lodged": 50, "granted": 48, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 35750,
      "sectors": {
        "higher_ed": {"lodged": 29061, "granted": 20787, "grant_rate": 75.1},
        "vet": {"lodged": 5871, "granted": 1968, "grant_rate": 30.2},
        "postgrad_research": {"lodged": 555, "granted": 559, "grant_rate": 95.7},
        "non_award": {"lodged": 111, "granted": 74, "grant_rate": 97.4},
        "schools": {"lodged": 65, "granted": 47, "grant_rate": 69.1},
        "elicos": {"lodged": 49, "granted": 17, "grant_rate": 34.0},
        "foreign_affairs": {"lodged": 38, "granted": 17, "grant_rate": 100.0},
      }
    },
  },
  "360": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 10748,
      "sectors": {
        "higher_ed": {"lodged": 6121, "granted": 5808, "grant_rate": 98.4},
        "vet": {"lodged": 3102, "granted": 2181, "grant_rate": 65.1},
        "foreign_affairs": {"lodged": 813, "granted": 799, "grant_rate": 99.8},
        "postgrad_research": {"lodged": 406, "granted": 414, "grant_rate": 99.5},
        "non_award": {"lodged": 171, "granted": 182, "grant_rate": 100.0},
        "elicos": {"lodged": 90, "granted": 68, "grant_rate": 66.0},
        "schools": {"lodged": 45, "granted": 40, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 12075,
      "sectors": {
        "higher_ed": {"lodged": 5961, "granted": 5278, "grant_rate": 98.3},
        "vet": {"lodged": 4319, "granted": 1894, "grant_rate": 63.1},
        "foreign_affairs": {"lodged": 961, "granted": 940, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 364, "granted": 350, "grant_rate": 100.0},
        "non_award": {"lodged": 279, "granted": 258, "grant_rate": 100.0},
        "elicos": {"lodged": 138, "granted": 64, "grant_rate": 56.1},
        "schools": {"lodged": 53, "granted": 46, "grant_rate": 90.2},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 6022,
      "sectors": {
        "higher_ed": {"lodged": 2965, "granted": 3528, "grant_rate": 97.9},
        "vet": {"lodged": 2195, "granted": 1561, "grant_rate": 58.1},
        "foreign_affairs": {"lodged": 447, "granted": 461, "grant_rate": 99.8},
        "postgrad_research": {"lodged": 193, "granted": 188, "grant_rate": 99.5},
        "non_award": {"lodged": 146, "granted": 147, "grant_rate": 100.0},
        "elicos": {"lodged": 52, "granted": 24, "grant_rate": 44.4},
        "schools": {"lodged": 24, "granted": 28, "grant_rate": 96.6},
      }
    },
  },
  "364": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 1228,
      "sectors": {
        "higher_ed": {"lodged": 656, "granted": 636, "grant_rate": 93.3},
        "postgrad_research": {"lodged": 441, "granted": 352, "grant_rate": 96.2},
        "vet": {"lodged": 69, "granted": 48, "grant_rate": 55.8},
        "schools": {"lodged": 47, "granted": 46, "grant_rate": 93.9},
        "non_award": {"lodged": 12, "granted": 9, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 2, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 1546,
      "sectors": {
        "higher_ed": {"lodged": 804, "granted": 618, "grant_rate": 93.5},
        "postgrad_research": {"lodged": 498, "granted": 540, "grant_rate": 97.1},
        "vet": {"lodged": 123, "granted": 40, "grant_rate": 46.5},
        "schools": {"lodged": 81, "granted": 59, "grant_rate": 93.7},
        "elicos": {"lodged": 25, "granted": 16, "grant_rate": 66.7},
        "non_award": {"lodged": 15, "granted": 15, "grant_rate": 93.8},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 801,
      "sectors": {
        "higher_ed": {"lodged": 436, "granted": 386, "grant_rate": 91.9},
        "postgrad_research": {"lodged": 297, "granted": 318, "grant_rate": 98.1},
        "vet": {"lodged": 33, "granted": 15, "grant_rate": 46.9},
        "schools": {"lodged": 29, "granted": 17, "grant_rate": 70.8},
        "elicos": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "368": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 47,
      "sectors": {
        "higher_ed": {"lodged": 18, "granted": 12, "grant_rate": 63.2},
        "postgrad_research": {"lodged": 16, "granted": 13, "grant_rate": 100.0},
        "elicos": {"lodged": 6, "granted": 2, "grant_rate": 22.2},
        "vet": {"lodged": 4, "granted": 1, "grant_rate": 20.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 69,
      "sectors": {
        "higher_ed": {"lodged": 28, "granted": 13, "grant_rate": 59.1},
        "vet": {"lodged": 17, "granted": 1, "grant_rate": 11.1},
        "elicos": {"lodged": 14, "granted": 1, "grant_rate": 11.1},
        "postgrad_research": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 28,
      "sectors": {
        "higher_ed": {"lodged": 13, "granted": 10, "grant_rate": 76.9},
        "postgrad_research": {"lodged": 6, "granted": 9, "grant_rate": 100.0},
        "vet": {"lodged": 6, "granted": 2, "grant_rate": 33.3},
        "elicos": {"lodged": 3, "granted": 1, "grant_rate": 25.0},
      }
    },
  },
  "372": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 522,
      "sectors": {
        "vet": {"lodged": 302, "granted": 311, "grant_rate": 86.6},
        "non_award": {"lodged": 161, "granted": 162, "grant_rate": 100.0},
        "higher_ed": {"lodged": 44, "granted": 40, "grant_rate": 95.2},
        "postgrad_research": {"lodged": 15, "granted": 17, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 555,
      "sectors": {
        "vet": {"lodged": 346, "granted": 182, "grant_rate": 89.2},
        "non_award": {"lodged": 145, "granted": 145, "grant_rate": 100.0},
        "higher_ed": {"lodged": 41, "granted": 31, "grant_rate": 88.6},
        "postgrad_research": {"lodged": 21, "granted": 18, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 308,
      "sectors": {
        "vet": {"lodged": 181, "granted": 103, "grant_rate": 85.1},
        "non_award": {"lodged": 100, "granted": 100, "grant_rate": 100.0},
        "higher_ed": {"lodged": 17, "granted": 15, "grant_rate": 93.8},
        "postgrad_research": {"lodged": 8, "granted": 7, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 0},
      }
    },
  },
  "376": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 112,
      "sectors": {
        "vet": {"lodged": 70, "granted": 44, "grant_rate": 66.7},
        "higher_ed": {"lodged": 22, "granted": 17, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 5, "grant_rate": 71.4},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 111,
      "sectors": {
        "vet": {"lodged": 62, "granted": 30, "grant_rate": 93.8},
        "higher_ed": {"lodged": 16, "granted": 15, "grant_rate": 100.0},
        "elicos": {"lodged": 13, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 11, "granted": 12, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 7, "granted": 6, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 62,
      "sectors": {
        "vet": {"lodged": 41, "granted": 17, "grant_rate": 60.7},
        "higher_ed": {"lodged": 11, "granted": 7, "grant_rate": 87.5},
        "non_award": {"lodged": 8, "granted": 2, "grant_rate": 66.7},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
      }
    },
  },
  "380": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 2380,
      "sectors": {
        "vet": {"lodged": 954, "granted": 1011, "grant_rate": 84.8},
        "schools": {"lodged": 428, "granted": 400, "grant_rate": 99.3},
        "non_award": {"lodged": 361, "granted": 361, "grant_rate": 100.0},
        "elicos": {"lodged": 289, "granted": 273, "grant_rate": 88.9},
        "higher_ed": {"lodged": 271, "granted": 286, "grant_rate": 96.9},
        "postgrad_research": {"lodged": 77, "granted": 77, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 2416,
      "sectors": {
        "vet": {"lodged": 940, "granted": 479, "grant_rate": 89.5},
        "schools": {"lodged": 473, "granted": 433, "grant_rate": 99.3},
        "non_award": {"lodged": 380, "granted": 367, "grant_rate": 100.0},
        "elicos": {"lodged": 323, "granted": 259, "grant_rate": 93.8},
        "higher_ed": {"lodged": 228, "granted": 178, "grant_rate": 96.7},
        "postgrad_research": {"lodged": 72, "granted": 63, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 1111,
      "sectors": {
        "vet": {"lodged": 472, "granted": 477, "grant_rate": 88.2},
        "non_award": {"lodged": 177, "granted": 178, "grant_rate": 100.0},
        "elicos": {"lodged": 154, "granted": 153, "grant_rate": 95.0},
        "higher_ed": {"lodged": 152, "granted": 153, "grant_rate": 98.1},
        "schools": {"lodged": 112, "granted": 153, "grant_rate": 98.7},
        "postgrad_research": {"lodged": 43, "granted": 45, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 0},
      }
    },
  },
  "384": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 6,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0},
        "postgrad_research": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 1, "granted": 0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 4,
      "sectors": {
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 7,
      "sectors": {
        "elicos": {"lodged": 4, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 2, "granted": 0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "388": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 14,
      "sectors": {
        "higher_ed": {"lodged": 6, "granted": 3, "grant_rate": 75.0},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 8,
      "sectors": {
        "higher_ed": {"lodged": 4, "granted": 2, "grant_rate": 66.7},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "392": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 6880,
      "sectors": {
        "elicos": {"lodged": 2834, "granted": 2816, "grant_rate": 97.1},
        "vet": {"lodged": 1271, "granted": 1302, "grant_rate": 86.5},
        "higher_ed": {"lodged": 1130, "granted": 1051, "grant_rate": 99.2},
        "non_award": {"lodged": 1076, "granted": 1078, "grant_rate": 99.8},
        "schools": {"lodged": 540, "granted": 539, "grant_rate": 99.6},
        "postgrad_research": {"lodged": 25, "granted": 22, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 8388,
      "sectors": {
        "elicos": {"lodged": 3558, "granted": 3243, "grant_rate": 99.4},
        "vet": {"lodged": 1674, "granted": 960, "grant_rate": 93.5},
        "non_award": {"lodged": 1211, "granted": 1210, "grant_rate": 99.7},
        "higher_ed": {"lodged": 1181, "granted": 1109, "grant_rate": 99.6},
        "schools": {"lodged": 744, "granted": 740, "grant_rate": 99.7},
        "postgrad_research": {"lodged": 20, "granted": 17, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 3151,
      "sectors": {
        "elicos": {"lodged": 1041, "granted": 1053, "grant_rate": 93.7},
        "non_award": {"lodged": 612, "granted": 608, "grant_rate": 100.0},
        "higher_ed": {"lodged": 552, "granted": 639, "grant_rate": 98.8},
        "vet": {"lodged": 530, "granted": 539, "grant_rate": 74.3},
        "schools": {"lodged": 393, "granted": 373, "grant_rate": 99.7},
        "postgrad_research": {"lodged": 21, "granted": 21, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "398": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 121,
      "sectors": {
        "higher_ed": {"lodged": 64, "granted": 60, "grant_rate": 96.8},
        "elicos": {"lodged": 25, "granted": 9, "grant_rate": 29.0},
        "postgrad_research": {"lodged": 12, "granted": 10, "grant_rate": 90.9},
        "vet": {"lodged": 11, "granted": 8, "grant_rate": 66.7},
        "non_award": {"lodged": 8, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 143,
      "sectors": {
        "higher_ed": {"lodged": 61, "granted": 57, "grant_rate": 98.3},
        "elicos": {"lodged": 45, "granted": 24, "grant_rate": 63.2},
        "vet": {"lodged": 21, "granted": 11, "grant_rate": 61.1},
        "postgrad_research": {"lodged": 8, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 55,
      "sectors": {
        "higher_ed": {"lodged": 40, "granted": 35, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 1, "grant_rate": 16.7},
        "postgrad_research": {"lodged": 4, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 4, "granted": 2, "grant_rate": 28.6},
        "non_award": {"lodged": 2, "granted": 4, "grant_rate": 100.0},
      }
    },
  },
  "400": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 257,
      "sectors": {
        "higher_ed": {"lodged": 115, "granted": 86, "grant_rate": 85.1},
        "elicos": {"lodged": 49, "granted": 23, "grant_rate": 45.1},
        "postgrad_research": {"lodged": 42, "granted": 43, "grant_rate": 97.7},
        "vet": {"lodged": 41, "granted": 31, "grant_rate": 49.2},
        "foreign_affairs": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 315,
      "sectors": {
        "higher_ed": {"lodged": 134, "granted": 85, "grant_rate": 72.6},
        "vet": {"lodged": 95, "granted": 27, "grant_rate": 43.5},
        "postgrad_research": {"lodged": 42, "granted": 29, "grant_rate": 100.0},
        "elicos": {"lodged": 39, "granted": 10, "grant_rate": 35.7},
        "foreign_affairs": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 149,
      "sectors": {
        "higher_ed": {"lodged": 57, "granted": 53, "grant_rate": 79.1},
        "elicos": {"lodged": 38, "granted": 18, "grant_rate": 41.9},
        "vet": {"lodged": 24, "granted": 10, "grant_rate": 34.5},
        "postgrad_research": {"lodged": 19, "granted": 23, "grant_rate": 95.8},
        "foreign_affairs": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "404": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 3840,
      "sectors": {
        "higher_ed": {"lodged": 2726, "granted": 1565, "grant_rate": 86.4},
        "vet": {"lodged": 1040, "granted": 276, "grant_rate": 29.2},
        "postgrad_research": {"lodged": 50, "granted": 33, "grant_rate": 91.7},
        "foreign_affairs": {"lodged": 14, "granted": 14, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 7271,
      "sectors": {
        "higher_ed": {"lodged": 4114, "granted": 3391, "grant_rate": 69.4},
        "vet": {"lodged": 3073, "granted": 795, "grant_rate": 25.9},
        "postgrad_research": {"lodged": 41, "granted": 34, "grant_rate": 87.2},
        "foreign_affairs": {"lodged": 25, "granted": 25, "grant_rate": 100.0},
        "non_award": {"lodged": 7, "granted": 6, "grant_rate": 75.0},
        "schools": {"lodged": 6, "granted": 2, "grant_rate": 28.6},
        "elicos": {"lodged": 5, "granted": 1, "grant_rate": 20.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 4803,
      "sectors": {
        "higher_ed": {"lodged": 2573, "granted": 2193, "grant_rate": 90.0},
        "vet": {"lodged": 2136, "granted": 531, "grant_rate": 40.9},
        "postgrad_research": {"lodged": 72, "granted": 79, "grant_rate": 98.8},
        "foreign_affairs": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "schools": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 4, "grant_rate": 80.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 66.7},
      }
    },
  },
  "410": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 6518,
      "sectors": {
        "higher_ed": {"lodged": 2585, "granted": 2454, "grant_rate": 98.9},
        "vet": {"lodged": 1870, "granted": 1533, "grant_rate": 72.5},
        "elicos": {"lodged": 1172, "granted": 1108, "grant_rate": 91.3},
        "schools": {"lodged": 547, "granted": 442, "grant_rate": 97.4},
        "non_award": {"lodged": 290, "granted": 301, "grant_rate": 99.0},
        "postgrad_research": {"lodged": 48, "granted": 46, "grant_rate": 97.9},
        "foreign_affairs": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 6765,
      "sectors": {
        "vet": {"lodged": 2561, "granted": 1293, "grant_rate": 80.0},
        "higher_ed": {"lodged": 2301, "granted": 2072, "grant_rate": 98.4},
        "elicos": {"lodged": 1079, "granted": 708, "grant_rate": 95.7},
        "schools": {"lodged": 472, "granted": 445, "grant_rate": 98.5},
        "non_award": {"lodged": 307, "granted": 285, "grant_rate": 98.3},
        "postgrad_research": {"lodged": 43, "granted": 34, "grant_rate": 97.1},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 3643,
      "sectors": {
        "higher_ed": {"lodged": 1627, "granted": 1720, "grant_rate": 98.8},
        "vet": {"lodged": 927, "granted": 846, "grant_rate": 67.4},
        "elicos": {"lodged": 590, "granted": 614, "grant_rate": 89.5},
        "schools": {"lodged": 317, "granted": 333, "grant_rate": 97.1},
        "non_award": {"lodged": 152, "granted": 153, "grant_rate": 99.4},
        "postgrad_research": {"lodged": 28, "granted": 35, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "412": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 7,
      "sectors": {
        "higher_ed": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 10,
      "sectors": {
        "non_award": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 0},
        "postgrad_research": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "414": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 271,
      "sectors": {
        "higher_ed": {"lodged": 254, "granted": 248, "grant_rate": 98.0},
        "postgrad_research": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 6, "granted": 7, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 33.3},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 271,
      "sectors": {
        "higher_ed": {"lodged": 253, "granted": 232, "grant_rate": 98.3},
        "postgrad_research": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "vet": {"lodged": 6, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 250,
      "sectors": {
        "higher_ed": {"lodged": 235, "granted": 214, "grant_rate": 99.1},
        "non_award": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "417": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 23,
      "sectors": {
        "higher_ed": {"lodged": 16, "granted": 8, "grant_rate": 80.0},
        "vet": {"lodged": 3, "granted": 4, "grant_rate": 50.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 50.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 33,
      "sectors": {
        "higher_ed": {"lodged": 18, "granted": 11, "grant_rate": 68.8},
        "vet": {"lodged": 10, "granted": 2, "grant_rate": 66.7},
        "elicos": {"lodged": 4, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 8,
      "sectors": {
        "higher_ed": {"lodged": 7, "granted": 6, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "418": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 625,
      "sectors": {
        "higher_ed": {"lodged": 198, "granted": 164, "grant_rate": 89.6},
        "elicos": {"lodged": 148, "granted": 77, "grant_rate": 49.0},
        "vet": {"lodged": 144, "granted": 81, "grant_rate": 51.9},
        "foreign_affairs": {"lodged": 124, "granted": 125, "grant_rate": 100.0},
        "schools": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "non_award": {"lodged": 5, "granted": 4, "grant_rate": 80.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 770,
      "sectors": {
        "vet": {"lodged": 334, "granted": 221, "grant_rate": 77.0},
        "higher_ed": {"lodged": 218, "granted": 180, "grant_rate": 95.2},
        "elicos": {"lodged": 104, "granted": 50, "grant_rate": 61.7},
        "foreign_affairs": {"lodged": 103, "granted": 102, "grant_rate": 100.0},
        "schools": {"lodged": 9, "granted": 8, "grant_rate": 88.9},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 275,
      "sectors": {
        "higher_ed": {"lodged": 98, "granted": 99, "grant_rate": 88.4},
        "vet": {"lodged": 64, "granted": 41, "grant_rate": 56.2},
        "elicos": {"lodged": 54, "granted": 38, "grant_rate": 74.5},
        "foreign_affairs": {"lodged": 54, "granted": 52, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "422": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 154,
      "sectors": {
        "higher_ed": {"lodged": 110, "granted": 82, "grant_rate": 78.8},
        "vet": {"lodged": 35, "granted": 11, "grant_rate": 25.6},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 2, "grant_rate": 28.6},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 296,
      "sectors": {
        "higher_ed": {"lodged": 185, "granted": 108, "grant_rate": 65.9},
        "vet": {"lodged": 77, "granted": 28, "grant_rate": 50.0},
        "elicos": {"lodged": 13, "granted": 3, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 10, "granted": 9, "grant_rate": 90.0},
        "foreign_affairs": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 78,
      "sectors": {
        "higher_ed": {"lodged": 51, "granted": 37, "grant_rate": 62.7},
        "vet": {"lodged": 13, "granted": 6, "grant_rate": 35.3},
        "schools": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 4, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "426": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 5,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "428": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 33,
      "sectors": {
        "vet": {"lodged": 19, "granted": 15, "grant_rate": 71.4},
        "higher_ed": {"lodged": 6, "granted": 5, "grant_rate": 83.3},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 29,
      "sectors": {
        "vet": {"lodged": 18, "granted": 12, "grant_rate": 80.0},
        "non_award": {"lodged": 6, "granted": 7, "grant_rate": 100.0},
        "higher_ed": {"lodged": 5, "granted": 2, "grant_rate": 50.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 19,
      "sectors": {
        "vet": {"lodged": 13, "granted": 13, "grant_rate": 92.9},
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "430": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 6,
      "sectors": {
        "vet": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 66.7},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 15,
      "sectors": {
        "vet": {"lodged": 9, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 5, "granted": 2, "grant_rate": 33.3},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "schools",
      "total_lodged": 4,
      "sectors": {
        "schools": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "434": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 1,
      "sectors": {
        "vet": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0},
      }
    },
  },
  "440": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 287,
      "sectors": {
        "vet": {"lodged": 245, "granted": 215, "grant_rate": 89.2},
        "higher_ed": {"lodged": 21, "granted": 20, "grant_rate": 90.9},
        "non_award": {"lodged": 17, "granted": 17, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 280,
      "sectors": {
        "vet": {"lodged": 243, "granted": 203, "grant_rate": 95.3},
        "higher_ed": {"lodged": 23, "granted": 18, "grant_rate": 100.0},
        "non_award": {"lodged": 13, "granted": 13, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 96,
      "sectors": {
        "vet": {"lodged": 82, "granted": 105, "grant_rate": 91.3},
        "higher_ed": {"lodged": 9, "granted": 5, "grant_rate": 71.4},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "442": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 31,
      "sectors": {
        "non_award": {"lodged": 13, "granted": 13, "grant_rate": 100.0},
        "higher_ed": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 27,
      "sectors": {
        "non_award": {"lodged": 16, "granted": 16, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 16,
      "sectors": {
        "higher_ed": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "446": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 185,
      "sectors": {
        "higher_ed": {"lodged": 158, "granted": 147, "grant_rate": 99.3},
        "vet": {"lodged": 9, "granted": 11, "grant_rate": 68.8},
        "schools": {"lodged": 9, "granted": 11, "grant_rate": 100.0},
        "non_award": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 245,
      "sectors": {
        "higher_ed": {"lodged": 207, "granted": 190, "grant_rate": 99.0},
        "vet": {"lodged": 16, "granted": 3, "grant_rate": 42.9},
        "schools": {"lodged": 14, "granted": 11, "grant_rate": 100.0},
        "elicos": {"lodged": 7, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 126,
      "sectors": {
        "higher_ed": {"lodged": 110, "granted": 111, "grant_rate": 97.4},
        "schools": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 1, "grant_rate": 50.0},
        "elicos": {"lodged": 3, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "450": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 15,
      "sectors": {
        "higher_ed": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 75.0},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 18,
      "sectors": {
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "higher_ed": {"lodged": 6, "granted": 2, "grant_rate": 33.3},
        "vet": {"lodged": 3, "granted": 1, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 10,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 2, "grant_rate": 66.7},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "454": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 27,
      "sectors": {
        "higher_ed": {"lodged": 15, "granted": 12, "grant_rate": 75.0},
        "postgrad_research": {"lodged": 5, "granted": 6, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 4, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 3, "grant_rate": 75.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 50,
      "sectors": {
        "higher_ed": {"lodged": 27, "granted": 13, "grant_rate": 48.1},
        "foreign_affairs": {"lodged": 9, "granted": 8, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 8, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 4, "granted": 2, "grant_rate": 40.0},
        "schools": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 22,
      "sectors": {
        "higher_ed": {"lodged": 12, "granted": 10, "grant_rate": 83.3},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "458": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 6148,
      "sectors": {
        "higher_ed": {"lodged": 3711, "granted": 3636, "grant_rate": 97.6},
        "vet": {"lodged": 1502, "granted": 719, "grant_rate": 47.8},
        "non_award": {"lodged": 583, "granted": 584, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 158, "granted": 151, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 113, "granted": 117, "grant_rate": 100.0},
        "elicos": {"lodged": 50, "granted": 41, "grant_rate": 47.1},
        "schools": {"lodged": 31, "granted": 30, "grant_rate": 96.8},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 7462,
      "sectors": {
        "higher_ed": {"lodged": 4044, "granted": 3689, "grant_rate": 98.2},
        "vet": {"lodged": 2253, "granted": 839, "grant_rate": 58.2},
        "non_award": {"lodged": 736, "granted": 733, "grant_rate": 99.3},
        "postgrad_research": {"lodged": 154, "granted": 137, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 136, "granted": 134, "grant_rate": 99.3},
        "elicos": {"lodged": 97, "granted": 16, "grant_rate": 47.1},
        "schools": {"lodged": 42, "granted": 40, "grant_rate": 93.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 3334,
      "sectors": {
        "higher_ed": {"lodged": 2164, "granted": 2219, "grant_rate": 98.1},
        "vet": {"lodged": 524, "granted": 407, "grant_rate": 33.6},
        "non_award": {"lodged": 452, "granted": 449, "grant_rate": 99.6},
        "postgrad_research": {"lodged": 80, "granted": 83, "grant_rate": 98.8},
        "foreign_affairs": {"lodged": 66, "granted": 70, "grant_rate": 100.0},
        "schools": {"lodged": 27, "granted": 24, "grant_rate": 100.0},
        "elicos": {"lodged": 21, "granted": 13, "grant_rate": 41.9},
      }
    },
  },
  "462": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 126,
      "sectors": {
        "higher_ed": {"lodged": 59, "granted": 61, "grant_rate": 98.4},
        "foreign_affairs": {"lodged": 58, "granted": 58, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 5, "granted": 7, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 116,
      "sectors": {
        "higher_ed": {"lodged": 70, "granted": 66, "grant_rate": 98.5},
        "foreign_affairs": {"lodged": 24, "granted": 24, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 10, "granted": 8, "grant_rate": 100.0},
        "vet": {"lodged": 8, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 115,
      "sectors": {
        "higher_ed": {"lodged": 58, "granted": 54, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 52, "granted": 49, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "466": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 48,
      "sectors": {
        "elicos": {"lodged": 44, "granted": 1, "grant_rate": 2.3},
        "higher_ed": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 2, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 3,
      "sectors": {
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "elicos": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 2,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "470": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 19,
      "sectors": {
        "vet": {"lodged": 8, "granted": 6, "grant_rate": 75.0},
        "higher_ed": {"lodged": 6, "granted": 4, "grant_rate": 80.0},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 16,
      "sectors": {
        "vet": {"lodged": 12, "granted": 8, "grant_rate": 88.9},
        "higher_ed": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 4,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "480": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 773,
      "sectors": {
        "vet": {"lodged": 454, "granted": 338, "grant_rate": 64.4},
        "higher_ed": {"lodged": 303, "granted": 286, "grant_rate": 96.0},
        "postgrad_research": {"lodged": 5, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 7, "grant_rate": 63.6},
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 1080,
      "sectors": {
        "vet": {"lodged": 670, "granted": 375, "grant_rate": 75.5},
        "higher_ed": {"lodged": 376, "granted": 314, "grant_rate": 95.4},
        "elicos": {"lodged": 12, "granted": 2, "grant_rate": 33.3},
        "non_award": {"lodged": 9, "granted": 8, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 6, "granted": 7, "grant_rate": 100.0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 350,
      "sectors": {
        "vet": {"lodged": 187, "granted": 179, "grant_rate": 67.3},
        "higher_ed": {"lodged": 153, "granted": 157, "grant_rate": 94.0},
        "postgrad_research": {"lodged": 4, "granted": 6, "grant_rate": 100.0},
        "non_award": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "484": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 2778,
      "sectors": {
        "vet": {"lodged": 1193, "granted": 1096, "grant_rate": 91.0},
        "non_award": {"lodged": 660, "granted": 653, "grant_rate": 100.0},
        "elicos": {"lodged": 655, "granted": 622, "grant_rate": 95.5},
        "higher_ed": {"lodged": 214, "granted": 212, "grant_rate": 98.1},
        "postgrad_research": {"lodged": 40, "granted": 38, "grant_rate": 100.0},
        "schools": {"lodged": 16, "granted": 13, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 2808,
      "sectors": {
        "vet": {"lodged": 1193, "granted": 912, "grant_rate": 97.4},
        "elicos": {"lodged": 866, "granted": 778, "grant_rate": 95.7},
        "non_award": {"lodged": 500, "granted": 501, "grant_rate": 100.0},
        "higher_ed": {"lodged": 197, "granted": 168, "grant_rate": 97.7},
        "postgrad_research": {"lodged": 36, "granted": 31, "grant_rate": 100.0},
        "schools": {"lodged": 16, "granted": 19, "grant_rate": 95.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 1390,
      "sectors": {
        "vet": {"lodged": 580, "granted": 705, "grant_rate": 92.3},
        "non_award": {"lodged": 359, "granted": 370, "grant_rate": 99.7},
        "elicos": {"lodged": 299, "granted": 349, "grant_rate": 95.6},
        "higher_ed": {"lodged": 131, "granted": 140, "grant_rate": 95.9},
        "postgrad_research": {"lodged": 18, "granted": 20, "grant_rate": 95.2},
        "schools": {"lodged": 3, "granted": 5, "grant_rate": 100.0},
      }
    },
  },
  "496": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 2288,
      "sectors": {
        "vet": {"lodged": 950, "granted": 516, "grant_rate": 49.2},
        "higher_ed": {"lodged": 780, "granted": 530, "grant_rate": 83.6},
        "elicos": {"lodged": 425, "granted": 234, "grant_rate": 45.0},
        "foreign_affairs": {"lodged": 88, "granted": 83, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 28, "granted": 14, "grant_rate": 77.8},
        "non_award": {"lodged": 14, "granted": 8, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 4429,
      "sectors": {
        "vet": {"lodged": 1760, "granted": 939, "grant_rate": 69.8},
        "elicos": {"lodged": 1491, "granted": 889, "grant_rate": 58.0},
        "higher_ed": {"lodged": 1018, "granted": 714, "grant_rate": 81.4},
        "foreign_affairs": {"lodged": 113, "granted": 107, "grant_rate": 96.4},
        "schools": {"lodged": 25, "granted": 21, "grant_rate": 91.3},
        "postgrad_research": {"lodged": 14, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 8, "granted": 6, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 868,
      "sectors": {
        "higher_ed": {"lodged": 396, "granted": 473, "grant_rate": 84.9},
        "vet": {"lodged": 249, "granted": 240, "grant_rate": 42.3},
        "elicos": {"lodged": 160, "granted": 101, "grant_rate": 44.7},
        "postgrad_research": {"lodged": 28, "granted": 32, "grant_rate": 82.1},
        "foreign_affairs": {"lodged": 26, "granted": 24, "grant_rate": 92.3},
        "schools": {"lodged": 6, "granted": 4, "grant_rate": 66.7},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "498": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 6,
      "sectors": {
        "elicos": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 5,
      "sectors": {
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "499": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 3,
      "sectors": {
        "elicos": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 3,
      "sectors": {
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 2,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "504": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 79,
      "sectors": {
        "vet": {"lodged": 24, "granted": 7, "grant_rate": 29.2},
        "foreign_affairs": {"lodged": 20, "granted": 20, "grant_rate": 100.0},
        "higher_ed": {"lodged": 12, "granted": 9, "grant_rate": 75.0},
        "non_award": {"lodged": 11, "granted": 12, "grant_rate": 100.0},
        "elicos": {"lodged": 7, "granted": 5, "grant_rate": 55.6},
        "postgrad_research": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 103,
      "sectors": {
        "vet": {"lodged": 62, "granted": 26, "grant_rate": 54.2},
        "elicos": {"lodged": 13, "granted": 3, "grant_rate": 42.9},
        "higher_ed": {"lodged": 12, "granted": 10, "grant_rate": 90.9},
        "non_award": {"lodged": 10, "granted": 6, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 42,
      "sectors": {
        "vet": {"lodged": 19, "granted": 3, "grant_rate": 27.3},
        "higher_ed": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "elicos": {"lodged": 6, "granted": 2, "grant_rate": 28.6},
        "non_award": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "508": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 20,
      "sectors": {
        "higher_ed": {"lodged": 9, "granted": 10, "grant_rate": 90.9},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "vet": {"lodged": 4, "granted": 1, "grant_rate": 50.0},
        "elicos": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 29,
      "sectors": {
        "higher_ed": {"lodged": 23, "granted": 16, "grant_rate": 94.1},
        "vet": {"lodged": 2, "granted": 3, "grant_rate": 60.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 14,
      "sectors": {
        "higher_ed": {"lodged": 8, "granted": 6, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "512": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 102,
      "sectors": {
        "higher_ed": {"lodged": 93, "granted": 87, "grant_rate": 98.9},
        "postgrad_research": {"lodged": 9, "granted": 10, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 118,
      "sectors": {
        "higher_ed": {"lodged": 102, "granted": 99, "grant_rate": 99.0},
        "postgrad_research": {"lodged": 12, "granted": 10, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 106,
      "sectors": {
        "higher_ed": {"lodged": 95, "granted": 98, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 10, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "516": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 12,
      "sectors": {
        "vet": {"lodged": 5, "granted": 5, "grant_rate": 50.0},
        "higher_ed": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 18,
      "sectors": {
        "vet": {"lodged": 11, "granted": 1, "grant_rate": 50.0},
        "higher_ed": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 13,
      "sectors": {
        "higher_ed": {"lodged": 8, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 2, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "524": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 28854,
      "sectors": {
        "higher_ed": {"lodged": 23565, "granted": 20456, "grant_rate": 90.5},
        "vet": {"lodged": 4301, "granted": 3210, "grant_rate": 51.2},
        "postgrad_research": {"lodged": 704, "granted": 537, "grant_rate": 94.5},
        "elicos": {"lodged": 193, "granted": 126, "grant_rate": 42.6},
        "foreign_affairs": {"lodged": 63, "granted": 63, "grant_rate": 100.0},
        "non_award": {"lodged": 17, "granted": 15, "grant_rate": 100.0},
        "schools": {"lodged": 11, "granted": 17, "grant_rate": 94.4},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 31910,
      "sectors": {
        "higher_ed": {"lodged": 24235, "granted": 12402, "grant_rate": 65.1},
        "vet": {"lodged": 7024, "granted": 2031, "grant_rate": 67.0},
        "elicos": {"lodged": 301, "granted": 63, "grant_rate": 51.6},
        "postgrad_research": {"lodged": 249, "granted": 176, "grant_rate": 98.9},
        "foreign_affairs": {"lodged": 59, "granted": 60, "grant_rate": 100.0},
        "schools": {"lodged": 21, "granted": 7, "grant_rate": 53.8},
        "non_award": {"lodged": 21, "granted": 17, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 22416,
      "sectors": {
        "higher_ed": {"lodged": 18370, "granted": 13719, "grant_rate": 82.0},
        "vet": {"lodged": 3277, "granted": 1663, "grant_rate": 41.4},
        "postgrad_research": {"lodged": 637, "granted": 663, "grant_rate": 93.8},
        "elicos": {"lodged": 70, "granted": 50, "grant_rate": 49.0},
        "foreign_affairs": {"lodged": 46, "granted": 47, "grant_rate": 100.0},
        "non_award": {"lodged": 10, "granted": 7, "grant_rate": 100.0},
        "schools": {"lodged": 6, "granted": 4, "grant_rate": 66.7},
      }
    },
  },
  "528": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 575,
      "sectors": {
        "non_award": {"lodged": 368, "granted": 369, "grant_rate": 100.0},
        "vet": {"lodged": 80, "granted": 95, "grant_rate": 93.1},
        "higher_ed": {"lodged": 66, "granted": 71, "grant_rate": 97.3},
        "postgrad_research": {"lodged": 34, "granted": 36, "grant_rate": 100.0},
        "elicos": {"lodged": 15, "granted": 19, "grant_rate": 100.0},
        "schools": {"lodged": 12, "granted": 11, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 695,
      "sectors": {
        "non_award": {"lodged": 438, "granted": 432, "grant_rate": 100.0},
        "vet": {"lodged": 118, "granted": 68, "grant_rate": 95.8},
        "higher_ed": {"lodged": 65, "granted": 52, "grant_rate": 98.1},
        "postgrad_research": {"lodged": 33, "granted": 28, "grant_rate": 100.0},
        "elicos": {"lodged": 30, "granted": 30, "grant_rate": 100.0},
        "schools": {"lodged": 10, "granted": 9, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 231,
      "sectors": {
        "non_award": {"lodged": 115, "granted": 119, "grant_rate": 100.0},
        "vet": {"lodged": 49, "granted": 38, "grant_rate": 80.9},
        "higher_ed": {"lodged": 39, "granted": 39, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 20, "granted": 21, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "548": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 147,
      "sectors": {
        "foreign_affairs": {"lodged": 127, "granted": 124, "grant_rate": 100.0},
        "higher_ed": {"lodged": 10, "granted": 7, "grant_rate": 63.6},
        "vet": {"lodged": 5, "granted": 2, "grant_rate": 14.3},
        "schools": {"lodged": 4, "granted": 3, "grant_rate": 75.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 114,
      "sectors": {
        "foreign_affairs": {"lodged": 84, "granted": 82, "grant_rate": 100.0},
        "vet": {"lodged": 15, "granted": 4, "grant_rate": 66.7},
        "higher_ed": {"lodged": 12, "granted": 5, "grant_rate": 83.3},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 55,
      "sectors": {
        "foreign_affairs": {"lodged": 30, "granted": 31, "grant_rate": 100.0},
        "higher_ed": {"lodged": 15, "granted": 10, "grant_rate": 90.9},
        "vet": {"lodged": 5, "granted": 1, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 1, "grant_rate": 33.3},
        "postgrad_research": {"lodged": 1, "granted": 0},
      }
    },
  },
  "554": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 4,
      "sectors": {
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 4,
      "sectors": {
        "vet": {"lodged": 2, "granted": 0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 0,
      "sectors": {
        "non_award": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "558": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 7,
      "sectors": {
        "elicos": {"lodged": 4, "granted": 3, "grant_rate": 75.0},
        "vet": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 8,
      "sectors": {
        "elicos": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "562": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 5,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 3, "grant_rate": 75.0},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 7,
      "sectors": {
        "vet": {"lodged": 4, "granted": 1, "grant_rate": 33.3},
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "566": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 1042,
      "sectors": {
        "higher_ed": {"lodged": 807, "granted": 519, "grant_rate": 79.6},
        "vet": {"lodged": 108, "granted": 51, "grant_rate": 42.9},
        "postgrad_research": {"lodged": 107, "granted": 73, "grant_rate": 97.3},
        "non_award": {"lodged": 7, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 6, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 1935,
      "sectors": {
        "higher_ed": {"lodged": 1620, "granted": 759, "grant_rate": 47.3},
        "vet": {"lodged": 190, "granted": 37, "grant_rate": 24.3},
        "postgrad_research": {"lodged": 105, "granted": 86, "grant_rate": 81.9},
        "non_award": {"lodged": 9, "granted": 6, "grant_rate": 75.0},
        "foreign_affairs": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 1, "grant_rate": 50.0},
        "schools": {"lodged": 1, "granted": 2, "grant_rate": 66.7},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 633,
      "sectors": {
        "higher_ed": {"lodged": 480, "granted": 535, "grant_rate": 88.0},
        "postgrad_research": {"lodged": 85, "granted": 103, "grant_rate": 98.1},
        "vet": {"lodged": 52, "granted": 25, "grant_rate": 33.8},
        "schools": {"lodged": 6, "granted": 3, "grant_rate": 75.0},
        "non_award": {"lodged": 5, "granted": 1, "grant_rate": 50.0},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "578": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 1511,
      "sectors": {
        "non_award": {"lodged": 1188, "granted": 1185, "grant_rate": 99.9},
        "higher_ed": {"lodged": 218, "granted": 204, "grant_rate": 99.5},
        "schools": {"lodged": 65, "granted": 58, "grant_rate": 100.0},
        "vet": {"lodged": 30, "granted": 27, "grant_rate": 87.1},
        "postgrad_research": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 1803,
      "sectors": {
        "non_award": {"lodged": 1395, "granted": 1405, "grant_rate": 100.0},
        "higher_ed": {"lodged": 277, "granted": 263, "grant_rate": 99.2},
        "schools": {"lodged": 80, "granted": 68, "grant_rate": 97.1},
        "vet": {"lodged": 46, "granted": 37, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 631,
      "sectors": {
        "non_award": {"lodged": 466, "granted": 488, "grant_rate": 99.6},
        "higher_ed": {"lodged": 147, "granted": 154, "grant_rate": 98.7},
        "vet": {"lodged": 10, "granted": 13, "grant_rate": 86.7},
        "schools": {"lodged": 4, "granted": 22, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "583": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 20,
      "sectors": {
        "foreign_affairs": {"lodged": 20, "granted": 19, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 17,
      "sectors": {
        "foreign_affairs": {"lodged": 17, "granted": 17, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 41,
      "sectors": {
        "foreign_affairs": {"lodged": 40, "granted": 39, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "585": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 29,
      "sectors": {
        "foreign_affairs": {"lodged": 29, "granted": 26, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 17,
      "sectors": {
        "foreign_affairs": {"lodged": 17, "granted": 16, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 12,
      "sectors": {
        "foreign_affairs": {"lodged": 12, "granted": 14, "grant_rate": 100.0},
      }
    },
  },
  "586": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 8154,
      "sectors": {
        "higher_ed": {"lodged": 4931, "granted": 2378, "grant_rate": 63.0},
        "vet": {"lodged": 2769, "granted": 792, "grant_rate": 30.0},
        "postgrad_research": {"lodged": 373, "granted": 299, "grant_rate": 95.8},
        "non_award": {"lodged": 31, "granted": 20, "grant_rate": 90.9},
        "foreign_affairs": {"lodged": 27, "granted": 27, "grant_rate": 100.0},
        "schools": {"lodged": 14, "granted": 12, "grant_rate": 54.5},
        "elicos": {"lodged": 9, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 18087,
      "sectors": {
        "higher_ed": {"lodged": 11621, "granted": 4480, "grant_rate": 44.6},
        "vet": {"lodged": 5900, "granted": 1323, "grant_rate": 27.8},
        "postgrad_research": {"lodged": 450, "granted": 442, "grant_rate": 95.5},
        "foreign_affairs": {"lodged": 39, "granted": 40, "grant_rate": 100.0},
        "schools": {"lodged": 37, "granted": 19, "grant_rate": 65.5},
        "non_award": {"lodged": 27, "granted": 14, "grant_rate": 93.3},
        "elicos": {"lodged": 13, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 5943,
      "sectors": {
        "higher_ed": {"lodged": 4027, "granted": 2545, "grant_rate": 69.3},
        "vet": {"lodged": 1561, "granted": 559, "grant_rate": 31.2},
        "postgrad_research": {"lodged": 281, "granted": 305, "grant_rate": 94.7},
        "foreign_affairs": {"lodged": 28, "granted": 28, "grant_rate": 100.0},
        "non_award": {"lodged": 27, "granted": 12, "grant_rate": 92.3},
        "schools": {"lodged": 11, "granted": 4, "grant_rate": 50.0},
        "elicos": {"lodged": 8, "granted": 3, "grant_rate": 37.5},
      }
    },
  },
  "591": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 38,
      "sectors": {
        "higher_ed": {"lodged": 16, "granted": 17, "grant_rate": 100.0},
        "vet": {"lodged": 10, "granted": 10, "grant_rate": 90.9},
        "non_award": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 6, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 48,
      "sectors": {
        "elicos": {"lodged": 22, "granted": 17, "grant_rate": 100.0},
        "vet": {"lodged": 13, "granted": 5, "grant_rate": 83.3},
        "higher_ed": {"lodged": 6, "granted": 4, "grant_rate": 100.0},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 29,
      "sectors": {
        "non_award": {"lodged": 15, "granted": 14, "grant_rate": 100.0},
        "higher_ed": {"lodged": 9, "granted": 6, "grant_rate": 85.7},
        "vet": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "598": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 1072,
      "sectors": {
        "vet": {"lodged": 412, "granted": 337, "grant_rate": 79.3},
        "foreign_affairs": {"lodged": 291, "granted": 282, "grant_rate": 97.6},
        "higher_ed": {"lodged": 267, "granted": 239, "grant_rate": 89.8},
        "schools": {"lodged": 90, "granted": 94, "grant_rate": 96.9},
        "postgrad_research": {"lodged": 10, "granted": 11, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 1129,
      "sectors": {
        "vet": {"lodged": 500, "granted": 286, "grant_rate": 71.5},
        "higher_ed": {"lodged": 303, "granted": 226, "grant_rate": 90.0},
        "foreign_affairs": {"lodged": 167, "granted": 143, "grant_rate": 93.5},
        "schools": {"lodged": 134, "granted": 103, "grant_rate": 89.6},
        "postgrad_research": {"lodged": 16, "granted": 11, "grant_rate": 100.0},
        "non_award": {"lodged": 6, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 718,
      "sectors": {
        "vet": {"lodged": 284, "granted": 196, "grant_rate": 61.3},
        "foreign_affairs": {"lodged": 207, "granted": 186, "grant_rate": 96.9},
        "higher_ed": {"lodged": 146, "granted": 155, "grant_rate": 93.4},
        "schools": {"lodged": 71, "granted": 63, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 8, "grant_rate": 88.9},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "600": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 97,
      "sectors": {
        "vet": {"lodged": 50, "granted": 47, "grant_rate": 95.9},
        "elicos": {"lodged": 36, "granted": 37, "grant_rate": 88.1},
        "higher_ed": {"lodged": 10, "granted": 10, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 129,
      "sectors": {
        "elicos": {"lodged": 68, "granted": 57, "grant_rate": 98.3},
        "vet": {"lodged": 41, "granted": 21, "grant_rate": 95.5},
        "higher_ed": {"lodged": 17, "granted": 16, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 34,
      "sectors": {
        "vet": {"lodged": 12, "granted": 17, "grant_rate": 85.0},
        "elicos": {"lodged": 10, "granted": 15, "grant_rate": 88.2},
        "higher_ed": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "604": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 1215,
      "sectors": {
        "vet": {"lodged": 485, "granted": 481, "grant_rate": 71.2},
        "elicos": {"lodged": 441, "granted": 374, "grant_rate": 75.1},
        "higher_ed": {"lodged": 262, "granted": 235, "grant_rate": 95.9},
        "non_award": {"lodged": 15, "granted": 15, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 9, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 1969,
      "sectors": {
        "elicos": {"lodged": 964, "granted": 660, "grant_rate": 75.3},
        "vet": {"lodged": 728, "granted": 311, "grant_rate": 82.7},
        "higher_ed": {"lodged": 241, "granted": 171, "grant_rate": 95.5},
        "postgrad_research": {"lodged": 19, "granted": 20, "grant_rate": 100.0},
        "non_award": {"lodged": 13, "granted": 11, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 499,
      "sectors": {
        "vet": {"lodged": 164, "granted": 97, "grant_rate": 51.6},
        "higher_ed": {"lodged": 158, "granted": 150, "grant_rate": 93.8},
        "elicos": {"lodged": 156, "granted": 148, "grant_rate": 71.2},
        "non_award": {"lodged": 11, "granted": 11, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "608": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 10346,
      "sectors": {
        "vet": {"lodged": 6552, "granted": 4817, "grant_rate": 51.8},
        "higher_ed": {"lodged": 3426, "granted": 2877, "grant_rate": 92.1},
        "foreign_affairs": {"lodged": 178, "granted": 176, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 107, "granted": 94, "grant_rate": 97.9},
        "schools": {"lodged": 29, "granted": 30, "grant_rate": 88.2},
        "elicos": {"lodged": 28, "granted": 18, "grant_rate": 40.0},
        "non_award": {"lodged": 26, "granted": 32, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 23574,
      "sectors": {
        "vet": {"lodged": 19610, "granted": 8120, "grant_rate": 53.5},
        "higher_ed": {"lodged": 3546, "granted": 2698, "grant_rate": 90.3},
        "foreign_affairs": {"lodged": 187, "granted": 184, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 88, "granted": 73, "grant_rate": 98.6},
        "elicos": {"lodged": 73, "granted": 13, "grant_rate": 35.1},
        "schools": {"lodged": 48, "granted": 39, "grant_rate": 92.9},
        "non_award": {"lodged": 22, "granted": 16, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 6353,
      "sectors": {
        "vet": {"lodged": 3888, "granted": 2521, "grant_rate": 54.3},
        "higher_ed": {"lodged": 2256, "granted": 2024, "grant_rate": 88.6},
        "foreign_affairs": {"lodged": 85, "granted": 83, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 69, "granted": 74, "grant_rate": 96.1},
        "schools": {"lodged": 31, "granted": 22, "grant_rate": 73.3},
        "non_award": {"lodged": 13, "granted": 12, "grant_rate": 100.0},
        "elicos": {"lodged": 11, "granted": 5, "grant_rate": 22.7},
      }
    },
  },
  "616": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 322,
      "sectors": {
        "vet": {"lodged": 122, "granted": 128, "grant_rate": 77.1},
        "non_award": {"lodged": 93, "granted": 94, "grant_rate": 100.0},
        "higher_ed": {"lodged": 47, "granted": 45, "grant_rate": 97.8},
        "elicos": {"lodged": 35, "granted": 29, "grant_rate": 87.9},
        "schools": {"lodged": 14, "granted": 12, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 11, "granted": 9, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 372,
      "sectors": {
        "vet": {"lodged": 179, "granted": 83, "grant_rate": 91.2},
        "non_award": {"lodged": 73, "granted": 71, "grant_rate": 98.6},
        "elicos": {"lodged": 57, "granted": 38, "grant_rate": 84.4},
        "higher_ed": {"lodged": 40, "granted": 33, "grant_rate": 94.3},
        "postgrad_research": {"lodged": 13, "granted": 12, "grant_rate": 100.0},
        "schools": {"lodged": 10, "granted": 7, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 129,
      "sectors": {
        "vet": {"lodged": 43, "granted": 51, "grant_rate": 70.8},
        "non_award": {"lodged": 36, "granted": 34, "grant_rate": 100.0},
        "higher_ed": {"lodged": 24, "granted": 24, "grant_rate": 96.0},
        "elicos": {"lodged": 11, "granted": 20, "grant_rate": 69.0},
        "postgrad_research": {"lodged": 8, "granted": 9, "grant_rate": 90.0},
        "schools": {"lodged": 7, "granted": 8, "grant_rate": 88.9},
      }
    },
  },
  "620": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 262,
      "sectors": {
        "higher_ed": {"lodged": 99, "granted": 96, "grant_rate": 98.0},
        "vet": {"lodged": 95, "granted": 89, "grant_rate": 77.4},
        "non_award": {"lodged": 30, "granted": 31, "grant_rate": 100.0},
        "elicos": {"lodged": 23, "granted": 23, "grant_rate": 92.0},
        "postgrad_research": {"lodged": 7, "granted": 8, "grant_rate": 100.0},
        "schools": {"lodged": 6, "granted": 3, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 319,
      "sectors": {
        "vet": {"lodged": 131, "granted": 67, "grant_rate": 87.0},
        "higher_ed": {"lodged": 93, "granted": 80, "grant_rate": 96.4},
        "elicos": {"lodged": 47, "granted": 36, "grant_rate": 94.7},
        "non_award": {"lodged": 26, "granted": 26, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 16, "granted": 13, "grant_rate": 100.0},
        "schools": {"lodged": 6, "granted": 6, "grant_rate": 85.7},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 147,
      "sectors": {
        "higher_ed": {"lodged": 52, "granted": 59, "grant_rate": 98.3},
        "vet": {"lodged": 50, "granted": 45, "grant_rate": 80.4},
        "elicos": {"lodged": 23, "granted": 22, "grant_rate": 84.6},
        "non_award": {"lodged": 17, "granted": 17, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "626": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 140,
      "sectors": {
        "foreign_affairs": {"lodged": 85, "granted": 82, "grant_rate": 98.8},
        "higher_ed": {"lodged": 23, "granted": 22, "grant_rate": 95.7},
        "vet": {"lodged": 18, "granted": 7, "grant_rate": 36.8},
        "elicos": {"lodged": 8, "granted": 9, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 202,
      "sectors": {
        "foreign_affairs": {"lodged": 146, "granted": 144, "grant_rate": 100.0},
        "higher_ed": {"lodged": 24, "granted": 25, "grant_rate": 92.6},
        "vet": {"lodged": 15, "granted": 6, "grant_rate": 54.5},
        "elicos": {"lodged": 12, "granted": 10, "grant_rate": 90.9},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 110,
      "sectors": {
        "foreign_affairs": {"lodged": 82, "granted": 79, "grant_rate": 100.0},
        "higher_ed": {"lodged": 16, "granted": 15, "grant_rate": 100.0},
        "vet": {"lodged": 11, "granted": 4, "grant_rate": 40.0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
  },
  "634": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 6, "granted": 4, "grant_rate": 66.7},
        "vet": {"lodged": 2, "granted": 0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 6,
      "sectors": {
        "higher_ed": {"lodged": 6, "granted": 4, "grant_rate": 100.0},
      }
    },
  },
  "642": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 81,
      "sectors": {
        "non_award": {"lodged": 26, "granted": 25, "grant_rate": 100.0},
        "vet": {"lodged": 23, "granted": 15, "grant_rate": 57.7},
        "higher_ed": {"lodged": 19, "granted": 18, "grant_rate": 94.7},
        "elicos": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 84,
      "sectors": {
        "vet": {"lodged": 25, "granted": 8, "grant_rate": 88.9},
        "higher_ed": {"lodged": 22, "granted": 19, "grant_rate": 95.0},
        "non_award": {"lodged": 20, "granted": 20, "grant_rate": 100.0},
        "elicos": {"lodged": 16, "granted": 10, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 30,
      "sectors": {
        "vet": {"lodged": 8, "granted": 5, "grant_rate": 71.4},
        "non_award": {"lodged": 8, "granted": 9, "grant_rate": 90.0},
        "higher_ed": {"lodged": 5, "granted": 7, "grant_rate": 100.0},
        "elicos": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "643": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 363,
      "sectors": {
        "higher_ed": {"lodged": 191, "granted": 188, "grant_rate": 96.9},
        "vet": {"lodged": 59, "granted": 52, "grant_rate": 65.8},
        "elicos": {"lodged": 58, "granted": 59, "grant_rate": 70.2},
        "postgrad_research": {"lodged": 27, "granted": 23, "grant_rate": 92.0},
        "non_award": {"lodged": 23, "granted": 17, "grant_rate": 100.0},
        "schools": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 593,
      "sectors": {
        "higher_ed": {"lodged": 283, "granted": 247, "grant_rate": 97.6},
        "vet": {"lodged": 118, "granted": 54, "grant_rate": 65.9},
        "elicos": {"lodged": 118, "granted": 70, "grant_rate": 76.9},
        "non_award": {"lodged": 34, "granted": 29, "grant_rate": 87.9},
        "postgrad_research": {"lodged": 28, "granted": 31, "grant_rate": 91.2},
        "schools": {"lodged": 12, "granted": 14, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 230,
      "sectors": {
        "higher_ed": {"lodged": 138, "granted": 108, "grant_rate": 90.8},
        "vet": {"lodged": 28, "granted": 25, "grant_rate": 73.5},
        "postgrad_research": {"lodged": 21, "granted": 22, "grant_rate": 100.0},
        "non_award": {"lodged": 21, "granted": 15, "grant_rate": 100.0},
        "elicos": {"lodged": 11, "granted": 8, "grant_rate": 40.0},
        "schools": {"lodged": 11, "granted": 5, "grant_rate": 100.0},
      }
    },
  },
  "646": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 27,
      "sectors": {
        "higher_ed": {"lodged": 17, "granted": 12, "grant_rate": 92.3},
        "postgrad_research": {"lodged": 4, "granted": 6, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 31,
      "sectors": {
        "higher_ed": {"lodged": 17, "granted": 11, "grant_rate": 57.9},
        "vet": {"lodged": 5, "granted": 2, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 22,
      "sectors": {
        "higher_ed": {"lodged": 14, "granted": 14, "grant_rate": 93.3},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 1, "granted": 0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "682": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 1837,
      "sectors": {
        "higher_ed": {"lodged": 1267, "granted": 1193, "grant_rate": 98.9},
        "elicos": {"lodged": 350, "granted": 399, "grant_rate": 94.8},
        "postgrad_research": {"lodged": 188, "granted": 211, "grant_rate": 96.8},
        "non_award": {"lodged": 19, "granted": 17, "grant_rate": 100.0},
        "vet": {"lodged": 11, "granted": 10, "grant_rate": 66.7},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 33.3},
        "foreign_affairs": {"lodged": 1, "granted": 0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 2206,
      "sectors": {
        "higher_ed": {"lodged": 1453, "granted": 1348, "grant_rate": 98.1},
        "elicos": {"lodged": 378, "granted": 251, "grant_rate": 96.2},
        "postgrad_research": {"lodged": 324, "granted": 267, "grant_rate": 98.5},
        "non_award": {"lodged": 27, "granted": 25, "grant_rate": 96.2},
        "vet": {"lodged": 19, "granted": 8, "grant_rate": 88.9},
        "schools": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1169,
      "sectors": {
        "higher_ed": {"lodged": 856, "granted": 1002, "grant_rate": 98.6},
        "elicos": {"lodged": 208, "granted": 201, "grant_rate": 96.2},
        "postgrad_research": {"lodged": 92, "granted": 109, "grant_rate": 98.2},
        "non_award": {"lodged": 7, "granted": 8, "grant_rate": 100.0},
        "vet": {"lodged": 6, "granted": 4, "grant_rate": 66.7},
      }
    },
  },
  "686": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 5,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 8,
      "sectors": {
        "vet": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 3, "granted": 1, "grant_rate": 33.3},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "688": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 25,
      "sectors": {
        "vet": {"lodged": 10, "granted": 7, "grant_rate": 63.6},
        "higher_ed": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 33.3},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 38,
      "sectors": {
        "higher_ed": {"lodged": 16, "granted": 17, "grant_rate": 100.0},
        "vet": {"lodged": 12, "granted": 10, "grant_rate": 83.3},
        "elicos": {"lodged": 6, "granted": 3, "grant_rate": 75.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 16,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "vet": {"lodged": 4, "granted": 7, "grant_rate": 87.5},
        "non_award": {"lodged": 3, "granted": 4, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "694": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 14,
      "sectors": {
        "higher_ed": {"lodged": 9, "granted": 5, "grant_rate": 62.5},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 28,
      "sectors": {
        "higher_ed": {"lodged": 16, "granted": 6, "grant_rate": 35.3},
        "vet": {"lodged": 6, "granted": 1, "grant_rate": 10.0},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 5, "granted": 4, "grant_rate": 80.0},
        "vet": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "702": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 2888,
      "sectors": {
        "higher_ed": {"lodged": 2385, "granted": 2270, "grant_rate": 99.0},
        "non_award": {"lodged": 289, "granted": 288, "grant_rate": 99.3},
        "vet": {"lodged": 105, "granted": 92, "grant_rate": 78.6},
        "postgrad_research": {"lodged": 71, "granted": 84, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 19, "granted": 18, "grant_rate": 100.0},
        "schools": {"lodged": 18, "granted": 19, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 3242,
      "sectors": {
        "higher_ed": {"lodged": 2633, "granted": 2497, "grant_rate": 98.3},
        "non_award": {"lodged": 334, "granted": 337, "grant_rate": 99.7},
        "vet": {"lodged": 151, "granted": 84, "grant_rate": 80.0},
        "postgrad_research": {"lodged": 84, "granted": 68, "grant_rate": 100.0},
        "schools": {"lodged": 23, "granted": 23, "grant_rate": 92.0},
        "foreign_affairs": {"lodged": 13, "granted": 13, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1700,
      "sectors": {
        "higher_ed": {"lodged": 1460, "granted": 1514, "grant_rate": 98.6},
        "non_award": {"lodged": 135, "granted": 129, "grant_rate": 98.5},
        "vet": {"lodged": 48, "granted": 50, "grant_rate": 76.9},
        "postgrad_research": {"lodged": 38, "granted": 38, "grant_rate": 100.0},
        "schools": {"lodged": 11, "granted": 10, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 8, "granted": 8, "grant_rate": 88.9},
      }
    },
  },
  "703": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 114,
      "sectors": {
        "vet": {"lodged": 54, "granted": 53, "grant_rate": 79.1},
        "elicos": {"lodged": 21, "granted": 18, "grant_rate": 94.7},
        "higher_ed": {"lodged": 20, "granted": 19, "grant_rate": 95.0},
        "non_award": {"lodged": 12, "granted": 12, "grant_rate": 100.0},
        "schools": {"lodged": 6, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 146,
      "sectors": {
        "vet": {"lodged": 76, "granted": 45, "grant_rate": 95.7},
        "elicos": {"lodged": 25, "granted": 22, "grant_rate": 95.7},
        "non_award": {"lodged": 16, "granted": 16, "grant_rate": 100.0},
        "schools": {"lodged": 13, "granted": 13, "grant_rate": 100.0},
        "higher_ed": {"lodged": 12, "granted": 7, "grant_rate": 87.5},
        "postgrad_research": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 67,
      "sectors": {
        "vet": {"lodged": 18, "granted": 16, "grant_rate": 69.6},
        "higher_ed": {"lodged": 17, "granted": 16, "grant_rate": 94.1},
        "non_award": {"lodged": 13, "granted": 13, "grant_rate": 100.0},
        "elicos": {"lodged": 10, "granted": 12, "grant_rate": 100.0},
        "schools": {"lodged": 6, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "704": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 12148,
      "sectors": {
        "higher_ed": {"lodged": 8773, "granted": 8891, "grant_rate": 90.1},
        "vet": {"lodged": 1586, "granted": 968, "grant_rate": 42.7},
        "schools": {"lodged": 1012, "granted": 909, "grant_rate": 69.3},
        "postgrad_research": {"lodged": 306, "granted": 318, "grant_rate": 99.4},
        "elicos": {"lodged": 226, "granted": 255, "grant_rate": 48.4},
        "foreign_affairs": {"lodged": 183, "granted": 187, "grant_rate": 100.0},
        "non_award": {"lodged": 62, "granted": 65, "grant_rate": 97.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 22799,
      "sectors": {
        "higher_ed": {"lodged": 12063, "granted": 9050, "grant_rate": 90.6},
        "vet": {"lodged": 6823, "granted": 2939, "grant_rate": 51.7},
        "schools": {"lodged": 2391, "granted": 1779, "grant_rate": 84.0},
        "elicos": {"lodged": 952, "granted": 262, "grant_rate": 49.5},
        "postgrad_research": {"lodged": 308, "granted": 254, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 196, "granted": 192, "grant_rate": 100.0},
        "non_award": {"lodged": 66, "granted": 36, "grant_rate": 87.8},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 6362,
      "sectors": {
        "higher_ed": {"lodged": 4693, "granted": 4276, "grant_rate": 90.8},
        "vet": {"lodged": 841, "granted": 544, "grant_rate": 56.9},
        "schools": {"lodged": 382, "granted": 276, "grant_rate": 65.9},
        "postgrad_research": {"lodged": 216, "granted": 221, "grant_rate": 98.2},
        "elicos": {"lodged": 123, "granted": 78, "grant_rate": 54.2},
        "foreign_affairs": {"lodged": 79, "granted": 78, "grant_rate": 100.0},
        "non_award": {"lodged": 28, "granted": 23, "grant_rate": 76.7},
      }
    },
  },
  "705": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 25,
      "sectors": {
        "vet": {"lodged": 12, "granted": 9, "grant_rate": 64.3},
        "higher_ed": {"lodged": 7, "granted": 6, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 31,
      "sectors": {
        "vet": {"lodged": 14, "granted": 7, "grant_rate": 87.5},
        "non_award": {"lodged": 9, "granted": 9, "grant_rate": 100.0},
        "higher_ed": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 11,
      "sectors": {
        "vet": {"lodged": 4, "granted": 5, "grant_rate": 71.4},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "710": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 389,
      "sectors": {
        "higher_ed": {"lodged": 195, "granted": 189, "grant_rate": 96.9},
        "vet": {"lodged": 149, "granted": 169, "grant_rate": 83.3},
        "postgrad_research": {"lodged": 21, "granted": 17, "grant_rate": 100.0},
        "schools": {"lodged": 14, "granted": 13, "grant_rate": 100.0},
        "non_award": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 585,
      "sectors": {
        "vet": {"lodged": 280, "granted": 143, "grant_rate": 75.7},
        "higher_ed": {"lodged": 259, "granted": 186, "grant_rate": 86.1},
        "schools": {"lodged": 17, "granted": 11, "grant_rate": 78.6},
        "postgrad_research": {"lodged": 13, "granted": 12, "grant_rate": 100.0},
        "non_award": {"lodged": 8, "granted": 7, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "elicos": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 249,
      "sectors": {
        "higher_ed": {"lodged": 132, "granted": 129, "grant_rate": 92.1},
        "vet": {"lodged": 95, "granted": 79, "grant_rate": 82.3},
        "postgrad_research": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 6, "granted": 7, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 7, "grant_rate": 100.0},
      }
    },
  },
  "716": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 695,
      "sectors": {
        "higher_ed": {"lodged": 432, "granted": 353, "grant_rate": 88.0},
        "vet": {"lodged": 233, "granted": 133, "grant_rate": 48.9},
        "postgrad_research": {"lodged": 16, "granted": 12, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 8, "granted": 8, "grant_rate": 100.0},
        "schools": {"lodged": 5, "granted": 4, "grant_rate": 80.0},
        "non_award": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 1085,
      "sectors": {
        "higher_ed": {"lodged": 645, "granted": 446, "grant_rate": 81.5},
        "vet": {"lodged": 408, "granted": 112, "grant_rate": 31.9},
        "postgrad_research": {"lodged": 19, "granted": 19, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 2, "grant_rate": 66.7},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 416,
      "sectors": {
        "higher_ed": {"lodged": 261, "granted": 305, "grant_rate": 92.1},
        "vet": {"lodged": 130, "granted": 102, "grant_rate": 61.4},
        "postgrad_research": {"lodged": 15, "granted": 18, "grant_rate": 94.7},
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0},
      }
    },
  },
  "724": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 3071,
      "sectors": {
        "elicos": {"lodged": 1494, "granted": 1516, "grant_rate": 98.5},
        "vet": {"lodged": 1044, "granted": 1047, "grant_rate": 90.6},
        "non_award": {"lodged": 373, "granted": 372, "grant_rate": 100.0},
        "higher_ed": {"lodged": 110, "granted": 103, "grant_rate": 92.8},
        "schools": {"lodged": 29, "granted": 31, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 21, "granted": 16, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 3536,
      "sectors": {
        "elicos": {"lodged": 1988, "granted": 1954, "grant_rate": 98.8},
        "vet": {"lodged": 1070, "granted": 768, "grant_rate": 95.3},
        "non_award": {"lodged": 324, "granted": 323, "grant_rate": 100.0},
        "higher_ed": {"lodged": 85, "granted": 70, "grant_rate": 90.9},
        "postgrad_research": {"lodged": 35, "granted": 32, "grant_rate": 100.0},
        "schools": {"lodged": 34, "granted": 24, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 1597,
      "sectors": {
        "elicos": {"lodged": 711, "granted": 710, "grant_rate": 96.5},
        "vet": {"lodged": 661, "granted": 639, "grant_rate": 89.0},
        "non_award": {"lodged": 139, "granted": 141, "grant_rate": 100.0},
        "higher_ed": {"lodged": 68, "granted": 69, "grant_rate": 98.6},
        "postgrad_research": {"lodged": 11, "granted": 16, "grant_rate": 100.0},
        "schools": {"lodged": 7, "granted": 9, "grant_rate": 100.0},
      }
    },
  },
  "728": {
    "fy2425": {
      "dominant": "postgrad_research",
      "total_lodged": 7,
      "sectors": {
        "postgrad_research": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "higher_ed": {"lodged": 1, "granted": 0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 15,
      "sectors": {
        "vet": {"lodged": 8, "granted": 0, "grant_rate": 0.0},
        "higher_ed": {"lodged": 7, "granted": 1, "grant_rate": 16.7},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 1,
      "sectors": {
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "729": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 20,
      "sectors": {
        "higher_ed": {"lodged": 10, "granted": 9, "grant_rate": 90.0},
        "postgrad_research": {"lodged": 6, "granted": 4, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 0},
        "elicos": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 19,
      "sectors": {
        "higher_ed": {"lodged": 13, "granted": 8, "grant_rate": 80.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 11,
      "sectors": {
        "higher_ed": {"lodged": 7, "granted": 6, "grant_rate": 75.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "740": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 3,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 2,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 1,
      "sectors": {
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "748": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 5,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 4,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "752": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 639,
      "sectors": {
        "non_award": {"lodged": 403, "granted": 404, "grant_rate": 100.0},
        "higher_ed": {"lodged": 93, "granted": 94, "grant_rate": 98.9},
        "vet": {"lodged": 76, "granted": 70, "grant_rate": 81.4},
        "elicos": {"lodged": 52, "granted": 56, "grant_rate": 98.2},
        "schools": {"lodged": 11, "granted": 13, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 4, "granted": 5, "grant_rate": 83.3},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 712,
      "sectors": {
        "non_award": {"lodged": 431, "granted": 429, "grant_rate": 100.0},
        "higher_ed": {"lodged": 111, "granted": 103, "grant_rate": 99.0},
        "vet": {"lodged": 88, "granted": 60, "grant_rate": 95.2},
        "elicos": {"lodged": 50, "granted": 43, "grant_rate": 91.5},
        "schools": {"lodged": 20, "granted": 13, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 12, "granted": 9, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 264,
      "sectors": {
        "non_award": {"lodged": 146, "granted": 150, "grant_rate": 100.0},
        "higher_ed": {"lodged": 49, "granted": 54, "grant_rate": 100.0},
        "vet": {"lodged": 25, "granted": 28, "grant_rate": 75.7},
        "elicos": {"lodged": 24, "granted": 24, "grant_rate": 96.0},
        "schools": {"lodged": 13, "granted": 18, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
      }
    },
  },
  "756": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 663,
      "sectors": {
        "non_award": {"lodged": 250, "granted": 249, "grant_rate": 99.6},
        "elicos": {"lodged": 236, "granted": 226, "grant_rate": 99.1},
        "schools": {"lodged": 86, "granted": 82, "grant_rate": 98.8},
        "higher_ed": {"lodged": 56, "granted": 57, "grant_rate": 100.0},
        "vet": {"lodged": 27, "granted": 32, "grant_rate": 91.4},
        "postgrad_research": {"lodged": 8, "granted": 5, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 659,
      "sectors": {
        "elicos": {"lodged": 252, "granted": 257, "grant_rate": 99.6},
        "non_award": {"lodged": 224, "granted": 228, "grant_rate": 100.0},
        "schools": {"lodged": 64, "granted": 64, "grant_rate": 100.0},
        "higher_ed": {"lodged": 55, "granted": 54, "grant_rate": 98.2},
        "vet": {"lodged": 55, "granted": 42, "grant_rate": 95.5},
        "postgrad_research": {"lodged": 9, "granted": 8, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 367,
      "sectors": {
        "elicos": {"lodged": 162, "granted": 163, "grant_rate": 98.2},
        "non_award": {"lodged": 93, "granted": 96, "grant_rate": 100.0},
        "schools": {"lodged": 58, "granted": 60, "grant_rate": 100.0},
        "higher_ed": {"lodged": 31, "granted": 31, "grant_rate": 100.0},
        "vet": {"lodged": 15, "granted": 16, "grant_rate": 94.1},
        "postgrad_research": {"lodged": 8, "granted": 9, "grant_rate": 100.0},
      }
    },
  },
  "760": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 22,
      "sectors": {
        "higher_ed": {"lodged": 11, "granted": 4, "grant_rate": 100.0},
        "vet": {"lodged": 5, "granted": 1, "grant_rate": 10.0},
        "elicos": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 2, "granted": 0},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 29,
      "sectors": {
        "vet": {"lodged": 10, "granted": 1, "grant_rate": 25.0},
        "higher_ed": {"lodged": 7, "granted": 6, "grant_rate": 85.7},
        "elicos": {"lodged": 6, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 3, "granted": 4, "grant_rate": 80.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 9,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "764": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 7111,
      "sectors": {
        "vet": {"lodged": 3669, "granted": 2426, "grant_rate": 65.6},
        "elicos": {"lodged": 1786, "granted": 1162, "grant_rate": 56.4},
        "higher_ed": {"lodged": 1352, "granted": 1301, "grant_rate": 96.0},
        "foreign_affairs": {"lodged": 120, "granted": 123, "grant_rate": 100.0},
        "schools": {"lodged": 78, "granted": 68, "grant_rate": 90.7},
        "postgrad_research": {"lodged": 53, "granted": 58, "grant_rate": 98.3},
        "non_award": {"lodged": 53, "granted": 50, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 11064,
      "sectors": {
        "vet": {"lodged": 6162, "granted": 3988, "grant_rate": 83.0},
        "elicos": {"lodged": 3178, "granted": 1846, "grant_rate": 65.9},
        "higher_ed": {"lodged": 1427, "granted": 1206, "grant_rate": 97.5},
        "schools": {"lodged": 117, "granted": 93, "grant_rate": 90.3},
        "foreign_affairs": {"lodged": 81, "granted": 76, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 54, "granted": 40, "grant_rate": 100.0},
        "non_award": {"lodged": 45, "granted": 42, "grant_rate": 93.3},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 2688,
      "sectors": {
        "vet": {"lodged": 1234, "granted": 1043, "grant_rate": 52.3},
        "higher_ed": {"lodged": 662, "granted": 689, "grant_rate": 94.0},
        "elicos": {"lodged": 614, "granted": 415, "grant_rate": 58.5},
        "foreign_affairs": {"lodged": 58, "granted": 58, "grant_rate": 100.0},
        "schools": {"lodged": 44, "granted": 36, "grant_rate": 85.7},
        "non_award": {"lodged": 44, "granted": 41, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 32, "granted": 36, "grant_rate": 100.0},
      }
    },
  },
  "768": {
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 1,
      "sectors": {
        "higher_ed": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 1,
      "sectors": {
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "776": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 185,
      "sectors": {
        "foreign_affairs": {"lodged": 134, "granted": 130, "grant_rate": 97.7},
        "vet": {"lodged": 40, "granted": 23, "grant_rate": 52.3},
        "higher_ed": {"lodged": 7, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 167,
      "sectors": {
        "foreign_affairs": {"lodged": 98, "granted": 90, "grant_rate": 100.0},
        "vet": {"lodged": 47, "granted": 15, "grant_rate": 42.9},
        "higher_ed": {"lodged": 11, "granted": 13, "grant_rate": 92.9},
        "schools": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 1, "grant_rate": 33.3},
        "postgrad_research": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 90,
      "sectors": {
        "foreign_affairs": {"lodged": 67, "granted": 66, "grant_rate": 97.1},
        "vet": {"lodged": 13, "granted": 13, "grant_rate": 76.5},
        "higher_ed": {"lodged": 6, "granted": 4, "grant_rate": 80.0},
        "schools": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
      }
    },
  },
  "780": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 8,
      "sectors": {
        "higher_ed": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 0, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 6,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 7,
      "sectors": {
        "higher_ed": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "vet": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "784": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 420,
      "sectors": {
        "higher_ed": {"lodged": 330, "granted": 323, "grant_rate": 98.5},
        "elicos": {"lodged": 68, "granted": 112, "grant_rate": 99.1},
        "postgrad_research": {"lodged": 11, "granted": 12, "grant_rate": 100.0},
        "non_award": {"lodged": 10, "granted": 9, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 365,
      "sectors": {
        "higher_ed": {"lodged": 247, "granted": 224, "grant_rate": 97.8},
        "elicos": {"lodged": 89, "granted": 37, "grant_rate": 100.0},
        "vet": {"lodged": 15, "granted": 8, "grant_rate": 88.9},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 5, "granted": 4, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 424,
      "sectors": {
        "higher_ed": {"lodged": 388, "granted": 370, "grant_rate": 99.5},
        "elicos": {"lodged": 21, "granted": 21, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 8, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 75.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "vet": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "788": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 14,
      "sectors": {
        "elicos": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 0},
        "vet": {"lodged": 1, "granted": 4, "grant_rate": 66.7},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 16,
      "sectors": {
        "vet": {"lodged": 9, "granted": 2, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 33.3},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 34,
      "sectors": {
        "elicos": {"lodged": 20, "granted": 19, "grant_rate": 95.0},
        "vet": {"lodged": 7, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 100.0},
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 50.0},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
  "792": {
    "fy2425": {
      "dominant": "elicos",
      "total_lodged": 2845,
      "sectors": {
        "elicos": {"lodged": 1709, "granted": 1108, "grant_rate": 63.3},
        "vet": {"lodged": 817, "granted": 798, "grant_rate": 77.1},
        "higher_ed": {"lodged": 267, "granted": 223, "grant_rate": 92.5},
        "postgrad_research": {"lodged": 28, "granted": 19, "grant_rate": 100.0},
        "non_award": {"lodged": 14, "granted": 14, "grant_rate": 93.3},
        "schools": {"lodged": 10, "granted": 5, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 4571,
      "sectors": {
        "elicos": {"lodged": 2616, "granted": 1821, "grant_rate": 73.3},
        "vet": {"lodged": 1658, "granted": 1096, "grant_rate": 80.9},
        "higher_ed": {"lodged": 247, "granted": 155, "grant_rate": 86.1},
        "postgrad_research": {"lodged": 27, "granted": 26, "grant_rate": 100.0},
        "non_award": {"lodged": 17, "granted": 15, "grant_rate": 100.0},
        "schools": {"lodged": 6, "granted": 1, "grant_rate": 16.7},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 1461,
      "sectors": {
        "elicos": {"lodged": 1022, "granted": 728, "grant_rate": 69.3},
        "vet": {"lodged": 246, "granted": 178, "grant_rate": 75.7},
        "higher_ed": {"lodged": 159, "granted": 139, "grant_rate": 86.9},
        "postgrad_research": {"lodged": 25, "granted": 31, "grant_rate": 96.9},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 8, "grant_rate": 88.9},
      }
    },
  },
  "798": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 30,
      "sectors": {
        "foreign_affairs": {"lodged": 28, "granted": 44, "grant_rate": 95.7},
        "higher_ed": {"lodged": 1, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
        "elicos": {"lodged": 0, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 55,
      "sectors": {
        "foreign_affairs": {"lodged": 46, "granted": 29, "grant_rate": 100.0},
        "higher_ed": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 17,
      "sectors": {
        "foreign_affairs": {"lodged": 17, "granted": 17, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "800": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 152,
      "sectors": {
        "higher_ed": {"lodged": 126, "granted": 92, "grant_rate": 89.3},
        "postgrad_research": {"lodged": 12, "granted": 10, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "vet": {"lodged": 6, "granted": 3, "grant_rate": 30.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 20.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 197,
      "sectors": {
        "higher_ed": {"lodged": 152, "granted": 112, "grant_rate": 69.6},
        "vet": {"lodged": 21, "granted": 2, "grant_rate": 12.5},
        "postgrad_research": {"lodged": 10, "granted": 9, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "schools": {"lodged": 5, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 110,
      "sectors": {
        "higher_ed": {"lodged": 94, "granted": 95, "grant_rate": 95.0},
        "postgrad_research": {"lodged": 6, "granted": 8, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "vet": {"lodged": 3, "granted": 0, "grant_rate": 0.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "804": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 66,
      "sectors": {
        "non_award": {"lodged": 28, "granted": 23, "grant_rate": 100.0},
        "higher_ed": {"lodged": 16, "granted": 13, "grant_rate": 92.9},
        "vet": {"lodged": 9, "granted": 6, "grant_rate": 66.7},
        "elicos": {"lodged": 6, "granted": 5, "grant_rate": 55.6},
        "postgrad_research": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 71,
      "sectors": {
        "vet": {"lodged": 18, "granted": 8, "grant_rate": 66.7},
        "higher_ed": {"lodged": 12, "granted": 10, "grant_rate": 90.9},
        "elicos": {"lodged": 12, "granted": 4, "grant_rate": 66.7},
        "non_award": {"lodged": 12, "granted": 12, "grant_rate": 92.3},
        "foreign_affairs": {"lodged": 7, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 6, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 44,
      "sectors": {
        "non_award": {"lodged": 27, "granted": 16, "grant_rate": 94.1},
        "higher_ed": {"lodged": 10, "granted": 4, "grant_rate": 66.7},
        "vet": {"lodged": 4, "granted": 2, "grant_rate": 33.3},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
  },
  "818": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 306,
      "sectors": {
        "higher_ed": {"lodged": 92, "granted": 83, "grant_rate": 82.2},
        "vet": {"lodged": 78, "granted": 17, "grant_rate": 33.3},
        "elicos": {"lodged": 72, "granted": 18, "grant_rate": 20.7},
        "postgrad_research": {"lodged": 51, "granted": 42, "grant_rate": 100.0},
        "non_award": {"lodged": 6, "granted": 4, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 423,
      "sectors": {
        "elicos": {"lodged": 178, "granted": 17, "grant_rate": 11.3},
        "higher_ed": {"lodged": 110, "granted": 80, "grant_rate": 84.2},
        "vet": {"lodged": 74, "granted": 20, "grant_rate": 26.0},
        "postgrad_research": {"lodged": 45, "granted": 40, "grant_rate": 97.6},
        "schools": {"lodged": 8, "granted": 3, "grant_rate": 37.5},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 381,
      "sectors": {
        "elicos": {"lodged": 229, "granted": 60, "grant_rate": 29.9},
        "higher_ed": {"lodged": 65, "granted": 46, "grant_rate": 90.2},
        "vet": {"lodged": 54, "granted": 20, "grant_rate": 33.9},
        "postgrad_research": {"lodged": 22, "granted": 27, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "non_award": {"lodged": 4, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 33.3},
      }
    },
  },
  "826": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 2228,
      "sectors": {
        "non_award": {"lodged": 1066, "granted": 1079, "grant_rate": 99.8},
        "vet": {"lodged": 572, "granted": 669, "grant_rate": 80.6},
        "higher_ed": {"lodged": 453, "granted": 433, "grant_rate": 97.1},
        "postgrad_research": {"lodged": 116, "granted": 111, "grant_rate": 99.1},
        "schools": {"lodged": 20, "granted": 21, "grant_rate": 95.5},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 2811,
      "sectors": {
        "non_award": {"lodged": 1111, "granted": 1096, "grant_rate": 99.6},
        "vet": {"lodged": 1084, "granted": 601, "grant_rate": 91.3},
        "higher_ed": {"lodged": 473, "granted": 429, "grant_rate": 98.2},
        "postgrad_research": {"lodged": 119, "granted": 114, "grant_rate": 100.0},
        "schools": {"lodged": 21, "granted": 17, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 1151,
      "sectors": {
        "vet": {"lodged": 540, "granted": 338, "grant_rate": 86.0},
        "higher_ed": {"lodged": 283, "granted": 272, "grant_rate": 96.5},
        "non_award": {"lodged": 256, "granted": 260, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 52, "granted": 60, "grant_rate": 100.0},
        "schools": {"lodged": 18, "granted": 16, "grant_rate": 84.2},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 1, "granted": 0},
      }
    },
  },
  "834": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 51,
      "sectors": {
        "higher_ed": {"lodged": 32, "granted": 31, "grant_rate": 86.1},
        "vet": {"lodged": 8, "granted": 6, "grant_rate": 75.0},
        "foreign_affairs": {"lodged": 6, "granted": 7, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 5, "granted": 6, "grant_rate": 100.0},
        "schools": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 62,
      "sectors": {
        "higher_ed": {"lodged": 28, "granted": 15, "grant_rate": 78.9},
        "vet": {"lodged": 12, "granted": 2, "grant_rate": 16.7},
        "foreign_affairs": {"lodged": 10, "granted": 10, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 9, "granted": 7, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 35,
      "sectors": {
        "higher_ed": {"lodged": 24, "granted": 16, "grant_rate": 94.1},
        "foreign_affairs": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 3, "grant_rate": 75.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
  },
  "840": {
    "fy2425": {
      "dominant": "non_award",
      "total_lodged": 5920,
      "sectors": {
        "non_award": {"lodged": 4336, "granted": 4302, "grant_rate": 99.8},
        "higher_ed": {"lodged": 986, "granted": 923, "grant_rate": 97.9},
        "vet": {"lodged": 349, "granted": 396, "grant_rate": 92.5},
        "postgrad_research": {"lodged": 133, "granted": 132, "grant_rate": 100.0},
        "schools": {"lodged": 109, "granted": 82, "grant_rate": 94.3},
        "elicos": {"lodged": 4, "granted": 5, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 3, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "non_award",
      "total_lodged": 5400,
      "sectors": {
        "non_award": {"lodged": 3755, "granted": 3770, "grant_rate": 99.8},
        "higher_ed": {"lodged": 941, "granted": 895, "grant_rate": 98.5},
        "vet": {"lodged": 484, "granted": 329, "grant_rate": 93.5},
        "postgrad_research": {"lodged": 132, "granted": 125, "grant_rate": 100.0},
        "schools": {"lodged": 78, "granted": 73, "grant_rate": 97.3},
        "elicos": {"lodged": 8, "granted": 7, "grant_rate": 100.0},
        "foreign_affairs": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "non_award",
      "total_lodged": 3899,
      "sectors": {
        "non_award": {"lodged": 2784, "granted": 2804, "grant_rate": 99.8},
        "higher_ed": {"lodged": 745, "granted": 766, "grant_rate": 98.2},
        "vet": {"lodged": 203, "granted": 201, "grant_rate": 93.1},
        "postgrad_research": {"lodged": 95, "granted": 95, "grant_rate": 100.0},
        "schools": {"lodged": 63, "granted": 56, "grant_rate": 88.9},
        "foreign_affairs": {"lodged": 5, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 4, "grant_rate": 100.0},
      }
    },
  },
  "854": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 4,
      "sectors": {
        "higher_ed": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 2, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 1,
      "sectors": {
        "foreign_affairs": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "elicos",
      "total_lodged": 2,
      "sectors": {
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
        "non_award": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "higher_ed": {"lodged": 0, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "858": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 111,
      "sectors": {
        "vet": {"lodged": 66, "granted": 46, "grant_rate": 66.7},
        "elicos": {"lodged": 26, "granted": 31, "grant_rate": 93.9},
        "higher_ed": {"lodged": 10, "granted": 6, "grant_rate": 85.7},
        "non_award": {"lodged": 5, "granted": 5, "grant_rate": 100.0},
        "schools": {"lodged": 3, "granted": 2, "grant_rate": 66.7},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "vet",
      "total_lodged": 154,
      "sectors": {
        "vet": {"lodged": 83, "granted": 30, "grant_rate": 85.7},
        "elicos": {"lodged": 63, "granted": 42, "grant_rate": 91.3},
        "higher_ed": {"lodged": 4, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 4, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 60,
      "sectors": {
        "vet": {"lodged": 32, "granted": 26, "grant_rate": 68.4},
        "elicos": {"lodged": 19, "granted": 20, "grant_rate": 95.2},
        "higher_ed": {"lodged": 7, "granted": 6, "grant_rate": 85.7},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
  },
  "860": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 252,
      "sectors": {
        "higher_ed": {"lodged": 203, "granted": 172, "grant_rate": 92.5},
        "elicos": {"lodged": 22, "granted": 13, "grant_rate": 56.5},
        "vet": {"lodged": 18, "granted": 9, "grant_rate": 40.9},
        "non_award": {"lodged": 4, "granted": 5, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 248,
      "sectors": {
        "higher_ed": {"lodged": 184, "granted": 108, "grant_rate": 63.5},
        "elicos": {"lodged": 31, "granted": 8, "grant_rate": 28.6},
        "vet": {"lodged": 29, "granted": 12, "grant_rate": 85.7},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 248,
      "sectors": {
        "higher_ed": {"lodged": 173, "granted": 137, "grant_rate": 99.3},
        "vet": {"lodged": 59, "granted": 21, "grant_rate": 37.5},
        "elicos": {"lodged": 13, "granted": 5, "grant_rate": 33.3},
        "postgrad_research": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
  },
  "862": {
    "fy2425": {
      "dominant": "vet",
      "total_lodged": 122,
      "sectors": {
        "vet": {"lodged": 56, "granted": 28, "grant_rate": 40.0},
        "elicos": {"lodged": 45, "granted": 21, "grant_rate": 48.8},
        "higher_ed": {"lodged": 15, "granted": 11, "grant_rate": 84.6},
        "non_award": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "schools": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "fy2324": {
      "dominant": "elicos",
      "total_lodged": 303,
      "sectors": {
        "elicos": {"lodged": 141, "granted": 57, "grant_rate": 46.7},
        "vet": {"lodged": 129, "granted": 28, "grant_rate": 53.8},
        "higher_ed": {"lodged": 26, "granted": 15, "grant_rate": 83.3},
        "non_award": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 0},
      }
    },
    "ytd": {
      "dominant": "vet",
      "total_lodged": 54,
      "sectors": {
        "vet": {"lodged": 22, "granted": 6, "grant_rate": 31.6},
        "elicos": {"lodged": 17, "granted": 8, "grant_rate": 34.8},
        "higher_ed": {"lodged": 12, "granted": 4, "grant_rate": 100.0},
        "non_award": {"lodged": 2, "granted": 2, "grant_rate": 100.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 50.0},
      }
    },
  },
  "882": {
    "fy2425": {
      "dominant": "foreign_affairs",
      "total_lodged": 82,
      "sectors": {
        "foreign_affairs": {"lodged": 63, "granted": 62, "grant_rate": 100.0},
        "vet": {"lodged": 17, "granted": 10, "grant_rate": 55.6},
        "higher_ed": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 0, "grant_rate": 0.0},
      }
    },
    "fy2324": {
      "dominant": "foreign_affairs",
      "total_lodged": 89,
      "sectors": {
        "foreign_affairs": {"lodged": 68, "granted": 67, "grant_rate": 100.0},
        "vet": {"lodged": 12, "granted": 2, "grant_rate": 66.7},
        "higher_ed": {"lodged": 7, "granted": 6, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 2, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "foreign_affairs",
      "total_lodged": 46,
      "sectors": {
        "foreign_affairs": {"lodged": 40, "granted": 41, "grant_rate": 100.0},
        "vet": {"lodged": 2, "granted": 3, "grant_rate": 42.9},
        "higher_ed": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "elicos": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
        "non_award": {"lodged": 1, "granted": 0},
      }
    },
  },
  "894": {
    "fy2425": {
      "dominant": "higher_ed",
      "total_lodged": 89,
      "sectors": {
        "higher_ed": {"lodged": 47, "granted": 34, "grant_rate": 81.0},
        "vet": {"lodged": 23, "granted": 18, "grant_rate": 45.0},
        "foreign_affairs": {"lodged": 12, "granted": 11, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 7, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 0, "granted": 2, "grant_rate": 66.7},
      }
    },
    "fy2324": {
      "dominant": "higher_ed",
      "total_lodged": 148,
      "sectors": {
        "higher_ed": {"lodged": 68, "granted": 43, "grant_rate": 74.1},
        "vet": {"lodged": 63, "granted": 17, "grant_rate": 38.6},
        "foreign_affairs": {"lodged": 6, "granted": 6, "grant_rate": 100.0},
        "elicos": {"lodged": 4, "granted": 0, "grant_rate": 0.0},
        "postgrad_research": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "non_award": {"lodged": 3, "granted": 2, "grant_rate": 50.0},
        "schools": {"lodged": 1, "granted": 1, "grant_rate": 100.0},
      }
    },
    "ytd": {
      "dominant": "higher_ed",
      "total_lodged": 46,
      "sectors": {
        "higher_ed": {"lodged": 30, "granted": 40, "grant_rate": 93.0},
        "vet": {"lodged": 12, "granted": 11, "grant_rate": 68.8},
        "foreign_affairs": {"lodged": 3, "granted": 3, "grant_rate": 100.0},
        "postgrad_research": {"lodged": 1, "granted": 2, "grant_rate": 100.0},
      }
    },
  },
};